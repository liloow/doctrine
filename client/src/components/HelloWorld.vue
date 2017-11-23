<template>
<section>
  <div>
    <ul>
      <li v-for="item in inventory"><button type="button" :disabled="item.amount<=0?true:false" @click='selectItem(item.name)'>{{item.name}} // In stock : {{item.amount}}</button></li>
    </ul>
      <pre>
        {{selectedIngredients}}  
      </pre>
      <p v-if='error'><strong>{{error}}</strong></p>

      <button type="button" :disabled="selectedIngredients.length===3?false:true" @click="mixThis">Concocter la potion</button>

      <h3 v-if="result">{{result}}</h3>
  </div>  
</section>
</template>

<script>
import {getInventory, mixIngredients } from '../api/api'
export default {
  name: 'HelloWorld',
  data () {
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
      if(index===-1) {
        if (this.selectedIngredients.length===3) return this.error='Il y a deja 3 ingredients dans le chaudron, retirez-en un si vous voulez ajouter ' + ingredient
        this.selectedIngredients.push(ingredient)
      }
      else{
        this.selectedIngredients.splice(index,1)
      }
    },
    mixThis() {
      mixIngredients(this.selectedIngredients[0],this.selectedIngredients[1],this.selectedIngredients[2]).then(r=>{
        this.result=r
        getInventory().then(r=>this.inventory=r.inventory)
      })
    }
  },
  created() {
    getInventory().then(r=>{
      this.inventory=r.inventory
  })
  }
}
</script>

<style scoped>

</style>
