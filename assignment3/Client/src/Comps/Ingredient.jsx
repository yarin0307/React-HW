import React, { useContext } from 'react'
import { KitchenContext } from '../Comps/KitchenApp'


export default function Ingredient(props) {
    const { ingForDishArray, setIngForDishArray } = useContext(KitchenContext);

    const AddtoArray = (e) => {
        if (e.target.checked == true) {
            ingForDishArray.push(e.target.id);
        }
        else {
            let newArray = ingForDishArray.filter(ing => parseInt(ing) !== parseInt(e.target.id));
            setIngForDishArray(newArray);

        }
    }
    return (
        <div className="card col-12  col-lg-4" >
            <img className="card-img-top" src={props.img} alt="Card image" />
            <div className="card-body d-flex flex-column">
                <h4 className="card-title">Name: {props.name}</h4>
                <p className="card-text">Calories: {props.calories}</p>
                {!props.type && (<input id={props.id} type="checkbox" onChange={(AddtoArray)} />
                )}
            </div>
        </div>
    )
}
