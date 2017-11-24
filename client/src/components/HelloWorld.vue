<template>
  <section>
    <h1 class="title">Laboratoire d'alchimie</h1>
    <div class="row">
      <ul>
        <li v-for="item in inventory">
          <div class="columns">
            <div class="column is-2"></div>
            <div class="column is-5"> {{item.name}} // In stock : <strong>{{item.amount}}</strong> </div>
            <div class="column  is-2 left">
              <button v-if="selectedIngredients.indexOf(item.name)===-1" class="button" :disabled="item.amount<=0?true:false" @click='selectItem(item.name)'>Add</button>
              <button v-else class="button" :disabled="item.amount<=0?true:false" @click='selectItem(item.name)'>Remove</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="row">
      <h2 class="title">Chaudron</h2>
      <ul>
        <li v-if="selectedIngredients[0]">{{selectedIngredients[0]}}</li>
        <li v-if="selectedIngredients[1]">{{selectedIngredients[1]}}</li>
        <li v-if="selectedIngredients[2]">{{selectedIngredients[2]}}</li>
      </ul>
    </div>
    <p v-if='error'><strong>{{error}}</strong></p>
    <button class="button" :disabled="selectedIngredients.length===3?false:true" @click="mixThis">Concocter la potion</button>
    <div class="row">
      <h3 class="title is-4" v-if="result">{{result}}</h3> </div>
  </section>
</template>
<script>
import { getInventory, mixIngredients } from '../api/api'
export default {
  name: 'HelloWorld',
  data() {
    return {
      inventory: null,
      selectedIngredients: [],
      error: null,
      result: null
    }
  },
  methods: {
    selectItem(ingredient) {
      this.error = null
      const index = this.selectedIngredients.indexOf(ingredient)
      if (index === -1) {
        if (this.selectedIngredients.length === 3) return this.error = 'Il y a deja 3 ingredients dans le chaudron, retirez-en un si vous voulez ajouter ' + ingredient
        this.selectedIngredients.push(ingredient)
      } else {
        this.selectedIngredients.splice(index, 1)
      }
    },
    mixThis() {
      mixIngredients(this.selectedIngredients[0], this.selectedIngredients[1], this.selectedIngredients[2]).then(r => {
        this.result = r
        getInventory().then(r => this.inventory = r.inventory)
        this.selectedIngredients = []
      })
    }
  },
  created() {
    getInventory().then(r => {
      this.inventory = r.inventory
    })
  }
}

</script>
<style scoped>
ul {
  list-style: none
}

.left {
  text-align: left
}

.row {
  padding: 20px 0
}

</style>
