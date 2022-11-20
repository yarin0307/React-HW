import FCRecipe from "./FCRecipe"

export function FCRecipesDone(props) {

    const getRecipeIdFromFCRecipe = (recipeId2Delete) => {
        props.sendRecipeIdFromFCRecipes(recipeId2Delete);
    }

    let recipesEatStr = props.myRecipesEat.map((recipe) => {
        return <FCRecipe id={recipe.id}
            img={recipe.img}
            name={recipe.name}
            body={recipe.body}
            type={1}
            key={recipe.id}
            sendRecipeId={getRecipeIdFromFCRecipe} />

    })
    if (props.myRecipesEat.length != 0) {
        return (
            <div className="row">
                <div className="col-12">
                    <h1>Ready to EAT!</h1>
                    <h2>Recipes made: {props.myRecipesEat.length}</h2>
                </div>
                {recipesEatStr}
            </div>
        )
    }
}