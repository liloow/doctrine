const Recipe = require("./recipes.js");
const Ingredient = require("./ingredients.js");
const Lab = require("./lab.js");

let lab = new Lab();

const validIngredients = [
	new Ingredient("Vinaigre", 2),
	new Ingredient("Persil", 5),
	new Ingredient("Tete de Rat", 3),
	new Ingredient("Bave de Lama", 8),
	new Ingredient("Epines de herisson", 1),
	new Ingredient("Argent", 10),
	new Ingredient("Or", 10),
	new Ingredient("Diamant", 10),
	new Ingredient("Fletan", 8)
];

const validRecipes = [
	new Recipe("Potion 1", [
		validIngredients[1],
		validIngredients[2],
		validIngredients[3]
	]),
	new Recipe("Potion 2", [
		validIngredients[2],
		validIngredients[4],
		validIngredients[3]
	]),
	new Recipe("Potion 3", [
		validIngredients[3],
		validIngredients[5],
		validIngredients[7]
	]),
	new Recipe("Potion 4", [
		validIngredients[4],
		validIngredients[6],
		validIngredients[4]
	]),
	new Recipe("Potion 5", [
		validIngredients[5],
		validIngredients[7],
		validIngredients[2]
	]),
	new Recipe("Potion 6", [
		validIngredients[6],
		validIngredients[8],
		validIngredients[4]
	])
];

lab._populateInventory(validIngredients);
lab._populateSpellBook(validRecipes);

//console.log(lab);
// console.log(validRecipes)

/*console.log(lab.mix([lab.inventory[3],lab.inventory[1],lab.inventory[2]]))
console.log(lab.mix([lab.inventory[3],lab.inventory[1],lab.inventory[2]]))
console.log(lab.mix([lab.inventory[3],lab.inventory[1],lab.inventory[2]]))
console.log(lab.mix([lab.inventory[0],lab.inventory[7],lab.inventory[8]]))
console.log(lab.mix([lab.inventory[6],lab.inventory[8],lab.inventory[4]]))*/

module.exports = lab