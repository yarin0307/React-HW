import React from 'react'
import ShowRecipeIngredients from './ShowRecipeIngredients'

export default function Recipe(props) {
    return (
        <div className="card col-12 col-md-6 col-lg-3" >
            <img className="card-img-top" src={props.img} alt="Card image" />
            <div className="card-body d-flex flex-column">
                <h4 className="card-title">Name: {props.name}</h4>
                <p className="card-text">Cooking Method: {props.cookingMethod}</p>
                <p className="card-text">Cooking Time: {props.time}</p>
                <ShowRecipeIngredients recipeId={props.id} recipeName={props.name} type={true}/>
            </div>
        </div>
    )
}
