import React, { useContext } from 'react'
import { KitchenContext } from '../Comps/KitchenApp'
import RecipesList from '../Comps/RecipesList'

export default function MyKitchen() {
  const { recipesArray, setRecipesArray } = useContext(KitchenContext)

  return (
    <div>
      <h1>Recipes List</h1>
      <RecipesList List={recipesArray} />
    </div>
  )
}
