const express = require("express");
const router = express.Router();
const lab = require("../index");

router.get("/", function(req, res, next) {
	const labData = {
		inventory: lab.inventory
	};
	res.json(labData);
});

router.post("/mix", function(req, res, next) {

	if (																				// CHECK IF EVERY INGREDIENT HAS BEEN PASSED AND ONLY TAKE THE FIRST THREE IN CASE OF TAMPERING
		req.body.ingredientOne &&
		req.body.ingredientTwo &&
		req.body.ingredientThree
	) {
		let { ingredientOne, ingredientTwo, ingredientThree } = req.body;

		if (																			// PROBABLY OVERKILL BUT I DON'T KNOW EVERY SINGLE DARK CORNERS OF JS SO JUST IN CASE
			typeof ingredientOne !== "string" ||	
			typeof ingredientTwo !== "string" ||
			typeof ingredientThree !== "string"
		)
			return res.json("Les ingredients doivent etre des strings");

		if (
			ingredientOne === ingredientTwo ||								// CHECK THAT EVERY INGREDIENT IS UNIQUE
			ingredientOne === ingredientThree ||
			ingredientTwo === ingredientThree
		)
			return res.json(
				"Deux fois le meme ingredient a ete selectionne, la mixture est invalide"
			);

		fullIngredientOne =																					// GET THE FULL INGREDIENT OBJECT FROM THE STRING TO BE ABLE TO INTERACT WITH THE AMOUNT
			lab.inventory[lab.inventory.map(el => el.name).indexOf(ingredientOne)];
		fullIngredientTwo =
			lab.inventory[lab.inventory.map(el => el.name).indexOf(ingredientTwo)];
		fullIngredientThree =
			lab.inventory[
				lab.inventory.map(el => el.name).indexOf(ingredientThree)
			];

			if (
		!fullIngredientOne ||																				// IF THE INGREDIENT PASSED HAS BEEN TAMPERED WITH, REJECT THE INPUT
		!fullIngredientTwo ||
		!fullIngredientThree
	) return res.json("Un ou plusieurs ingredients envoye n'existe pas !")

		const mixtureResult = lab.mix([																	// IF PASSED ALL SAFETY BARRIERS TRY AND MAKE THE POTION
			fullIngredientOne,
			fullIngredientTwo,
			fullIngredientThree
		]);

		res.json(mixtureResult);
	} else {																										// FALLBACK IN CASE OF TAMPERING
		return next("Un ingredient doit toujours etre defini");
	}
});

module.exports = router;
