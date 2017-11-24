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
	// if (Object.keys(req.body).length === 0)
	// 	return res.json("Un ingredient doit toujours etre defini");

	if (
		req.body.ingredientOne &&
		req.body.ingredientTwo &&
		req.body.ingredientThree
	) {
		let { ingredientOne, ingredientTwo, ingredientThree } = req.body;

		if (
			typeof ingredientOne !== "string" ||
			typeof ingredientTwo !== "string" ||
			typeof ingredientThree !== "string"
		)
			return res.json("Les ingredients doivent etre des strings");

		if (
			ingredientOne === ingredientTwo ||
			ingredientOne === ingredientThree ||
			ingredientTwo === ingredientThree
		)
			return res.json(
				"Deux fois le meme ingredient a ete selectionne, la mixture est invalide"
			);

		fullIngredientOne =
			lab.inventory[lab.inventory.map(el => el.name).indexOf(ingredientOne)];
		fullIngredientTwo =
			lab.inventory[lab.inventory.map(el => el.name).indexOf(ingredientTwo)];
		fullIngredientThree =
			lab.inventory[
				lab.inventory.map(el => el.name).indexOf(ingredientThree)
			];

			if (
		!fullIngredientOne ||
		!fullIngredientTwo ||
		!fullIngredientThree
	) return res.json("Un ou plusieurs ingredients envoye n'existe pas !")

		const mixtureResult = lab.mix([
			fullIngredientOne,
			fullIngredientTwo,
			fullIngredientThree
		]);

		res.json(mixtureResult);
	} else {
		return next("Un ingredient doit toujours etre defini");
	}
});

module.exports = router;
