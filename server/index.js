const Recipe = require("./recipes.js");
const Ingredient = require("./ingredients.js");
const Lab = require("./lab.js");

let lab = new Lab();

const validIngredients = [
	new Ingredient("Vinaigre", 8),
	new Ingredient("Persil", 5),
	new Ingredient("Tete de Rat", 3),
	new Ingredient("Bave de Lama", 8),
	new Ingredient("Epines de herisson", 14),
	new Ingredient("Argent", 10),
	new Ingredient("Or", 5),
	new Ingredient("Diamant", 3),
	new Ingredient("Fletan", 8)
];

const validRecipes = [
	new Recipe("Potion d\'invincibilité", [
		validIngredients[1],
		validIngredients[2],
		validIngredients[3]
	]),
	new Recipe("Potion de force surhumaine", [
		validIngredients[4],
		validIngredients[5],
		validIngredients[6]
	]),
	new Recipe("Potion d\'intelligence accrue", [
		validIngredients[0],
		validIngredients[2],
		validIngredients[4]
	]),
	new Recipe("Potion d\'invisibilité", [
		validIngredients[0],
		validIngredients[3],
		validIngredients[6]
	]),
	new Recipe("Elixir de vigueur", [
		validIngredients[4],
		validIngredients[2],
		validIngredients[1]
	]),
	new Recipe("Elixir d\'amour éternel", [
		validIngredients[6],
		validIngredients[7],
		validIngredients[8]
	]),
	new Recipe("Potion coupe-faim", [
		validIngredients[4],
		validIngredients[6],
		validIngredients[8]
	]),
	new Recipe("Potion de chance", [
		validIngredients[3],
		validIngredients[7],
		validIngredients[8]
	]),
	new Recipe("Potion de soins", [
		validIngredients[0],
		validIngredients[1],
		validIngredients[5]
	]),
	new Recipe("Potion de vitesse", [
		validIngredients[1],
		validIngredients[3],
		validIngredients[5]
	]),
	new Recipe("Elixir de vie", [
		validIngredients[0],
		validIngredients[1],
		validIngredients[8]
	]),
	new Recipe("Potion de mort instantanée", [
		validIngredients[1],
		validIngredients[6],
		validIngredients[8]
	]),
	new Recipe("Elixir de jouvence", [
		validIngredients[2],
		validIngredients[5],
		validIngredients[6]
	]),
	new Recipe("Polyjuice", [
		validIngredients[4],
		validIngredients[7],
		validIngredients[8]
	]),
	new Recipe("Potion Magique", [
		validIngredients[3],
		validIngredients[6],
		validIngredients[7]
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

module.exports = lab;
