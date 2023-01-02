import React from 'react'
import Recipe from './Recipe'

export default function RecipesList(props) {

    let recipesStr = props.List.map((recipe) => {
        return <Recipe id={recipe.id}
            name={recipe.name}
            img={recipe.image}
            cookingMethod={recipe.cookingMethod}
            time={recipe.time}
            key={recipe.id} />
    })

    return (
        <div className="row">
            {recipesStr}
        </div>

    )
}
