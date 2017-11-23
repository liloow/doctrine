import Vue from 'vue'
import axios from 'axios'

const api = axios.create({
	baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api",
})


export function getInventory() { return api.get("/").then(r => r.data) }

export function mixIngredients(ingredientOne,ingredientTwo,ingredientThree) { return api.post("/mix",{ingredientOne,ingredientTwo,ingredientThree}).then(r => r.data) }