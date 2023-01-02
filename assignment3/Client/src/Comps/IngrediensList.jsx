import React from 'react'
import Ingredient from './Ingredient'

export default function IngrediensList(props) {
    let ingredientsStr = props.List.map((ingredient) => {
        return <Ingredient id={ingredient.id}
            name={ingredient.name}
            img={ingredient.image}
            calories={ingredient.calories}
            type={props.type}
            key={ingredient.id} />
    })
  return (
    <div className="row">
            {ingredientsStr}
        </div>
  )
}
