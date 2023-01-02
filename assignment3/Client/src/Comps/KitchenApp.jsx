import React, { createContext, useEffect, useState } from 'react'


const InitRecipeList = [];
const InitIngredientsList = [];
const ingForDish = [];


export const KitchenContext = createContext();

export default function KitchenApp(props) {
    const [recipesArray, setRecipesArray] = useState(InitRecipeList);
    const [ingredientsArray, setIngredientsArray] = useState(InitIngredientsList);
    const [ingForDishArray, setIngForDishArray] = useState(ingForDish);
let apiUrl="";
    useEffect(() => {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            apiUrl = 'https://localhost:7283/api/Recipes';

        }
        else {
            apiUrl = 'https://proj.ruppin.ac.il/cgroup49/test2/tar1/api/Recipes';

        }
        fetch(apiUrl, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            })
        })
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    setRecipesArray(result)
                },
                (error) => {
                    console.log("err get=", error);
                });


    },[])

    useEffect(() => {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            apiUrl = 'https://localhost:7283/api/ingredients';

        }
        else {
            apiUrl = 'https://proj.ruppin.ac.il/cgroup49/test2/tar1/api/ingredients';

        }
        fetch(apiUrl, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            })
        })
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    setIngredientsArray(result)
                },
                (error) => {
                    console.log("err get=", error);
                });


    },[])


    return (
        <div>
            <KitchenContext.Provider value={{ recipesArray, setRecipesArray, ingredientsArray, setIngredientsArray,ingForDishArray, setIngForDishArray }}>
                {props.children}
            </KitchenContext.Provider>
        </div>
    )
}
