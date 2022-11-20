import { Component } from "react";
import FCRecipes from "../Functional Comps/FCRecipes";
import { FCRecipesDone } from "../Functional Comps/FCRecipesDone";

const InitRecipesList = [

    {
        id: 1,
        img: "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/sites/5/2021/01/13043234/unnamed-scaled.jpg",
        name: "Pasta",
        body: "Pasta with tomato sauce.",
    },
    {
        id: 2,
        img: "https://happykitchen.co.il/wp-content/uploads/2020/03/%D7%A2%D7%95%D7%A3-%D7%91%D7%AA%D7%91%D7%A0%D7%99%D7%AA-%D7%A8%D7%95%D7%97%D7%91.jpg",
        name: "chicken",
        body: "Baked chicken with potatoes, carrots, onions and sweet potatoes.",
    },
    {
        id: 3,
        img: "https://happykitchen.co.il/wp-content/uploads/2020/05/%D7%A2%D7%95%D7%92%D7%AA-%D7%92%D7%91%D7%99%D7%A0%D7%94-%D7%A4%D7%A8%D7%95%D7%A8%D7%99%D7%9D-%D7%A4%D7%A8%D7%95%D7%A1%D7%94.jpg",
        name: "Cheesecake",
        body: "Non-baking cheesecake with biscuit crumbs.",
    },
    {
        id: 4,
        img: "https://hadarshapira.com/uploads/%D7%A8%D7%95%D7%92%D7%9C%D7%9A-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93.jpg",
        name: "Chocolate pastry",
        body: "A very delicious chocolate pastry with coffee on Saturday mornings.",
    },
];

export default class CCMyKitchen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            myRecipes: InitRecipesList,
            recipesEat: []
        }

    }

    DeleteRecipe = (recipeID2Delete) => {//delete from recipe and transfer to ready to eat

        let newRecipes = this.state.myRecipes.filter(recipe => recipe.id !== recipeID2Delete);
        let newRecipesEat = [...this.state.recipesEat];
        const recipeEat = this.state.myRecipes.filter(recipe => recipe.id === recipeID2Delete);
        newRecipesEat.push(recipeEat[0]);
        this.setState({ myRecipes: newRecipes });
        this.setState({ recipesEat: newRecipesEat });

    }
    DeleteRecipe2Eat = (recipeID2Delete) => {//delete from ready to eat and transfer to recipe
        let newRecipesEat = this.state.recipesEat.filter(recipe => recipe.id !== recipeID2Delete);
        let newRecipes = [...this.state.myRecipes];
        const recipe = this.state.recipesEat.filter(recipe => recipe.id === recipeID2Delete);
        newRecipes.push(recipe[0]);
        this.setState({ myRecipes: newRecipes });
        this.setState({ recipesEat: newRecipesEat });
    }

    render() {

        return (
            <div className="container">
                <FCRecipes myRecipes={this.state.myRecipes} sendRecipeIdFromFCRecipes={this.DeleteRecipe} />
                <FCRecipesDone myRecipesEat={this.state.recipesEat} sendRecipeIdFromFCRecipes={this.DeleteRecipe2Eat} />
            </div>
        )
    }
}