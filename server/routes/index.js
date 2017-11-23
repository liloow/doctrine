const express = require('express');
const router = express.Router();
const lab = require('../index')

router.get('/', function(req, res, next) {
	const labData = {
		inventory: lab.inventory,
	}
  res.json(labData);
});

router.post('/mix', function(req,res,next) {

	if (Object.keys(req.body).length===0) 	return res.json("Un ingredient doit toujours etre defini")

	if (req.body.ingredientOne&&req.body.ingredientTwo&&req.body.ingredientThree) {

	let {ingredientOne, ingredientTwo, ingredientThree} = req.body

	if(typeof ingredientOne !=='string' || typeof ingredientTwo !=='string' || typeof ingredientThree!=='string') return res.json('Les ingredients doivent etre des strings')

	if (ingredientOne === ingredientTwo || ingredientOne === ingredientThree || ingredientTwo === ingredientThree) return res.json('Deux fois le meme ingredient a ete selectionne, la mixture est invalide')



	ingredientOne=lab.inventory[lab.inventory.map(el=>el.name).indexOf(ingredientOne)]
	ingredientTwo=lab.inventory[lab.inventory.map(el=>el.name).indexOf(ingredientTwo)]
	ingredientThree=lab.inventory[lab.inventory.map(el=>el.name).indexOf(ingredientThree)]

	const mixtureResult = lab.mix([ingredientOne, ingredientTwo, ingredientThree])

	res.json(mixtureResult)
}
	else {
		return res.json("Un ingredient doit toujours etre defini")
	}
})

module.exports = router;
