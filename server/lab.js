class Lab {
  constructor() {
    this.inventory = [];
    this.spellBook = [];
  }

  mix(ingredients) {
    for (const ingredient of ingredients) {
     if (this.inventory[this.inventory.map(el => el.name).indexOf(ingredient.name)].amount<=0) return "Il n'y a plus de " + ingredient.name + " ! Impossible de concocter la mixture..." ; // Reject input if ingredient is out of stock
    }
    for (const ingredient of ingredients) {
      this.inventory[this.inventory.map(el => el.name).indexOf(ingredient.name)].amount--; // Ingredient is lost wether the recipe is valid or not
    }
    for (const recipe of this.spellBook) {
      if (
        recipe.ingredients.map(el => el.name).indexOf(ingredients[0].name)>=0 && 
        recipe.ingredients.map(el => el.name).indexOf(ingredients[1].name)>=0 &&
        recipe.ingredients.map(el => el.name).indexOf(ingredients[2].name)>=0
      ) {

        return recipe.name;
      }
    }
    return "Recette Incorrecte";
  }

  _populateSpellBook(recipes) {
    for (const recipe of recipes) {
      this.spellBook.push(recipe);
    }
  }

  _populateInventory(ingredients) {
    for (const ingredient of ingredients) {
      this.inventory.push(ingredient);
    }
  }
}

module.exports = Lab;
