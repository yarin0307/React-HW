import FCRecipe from "./FCRecipe"

export default function FCRecipes(props) {

    const getRecipeIdFromFCRecipe = (recipeId2Delete) => {
        props.sendRecipeIdFromFCRecipes(recipeId2Delete);
    }

    let recipesStr = props.myRecipes.map((recipe) => {
        return <FCRecipe id={recipe.id}
            img={recipe.img}
            name={recipe.name}
            body={recipe.body}
            type={0}
            key={recipe.id}
            sendRecipeId={getRecipeIdFromFCRecipe} />
    })
    if (props.myRecipes.length != 0) {
        return (
            <div className="row">
                <div className="col-12">
                    <h1>Recipes</h1>
                    <h2>Recipes made: {props.myRecipes.length}</h2>
                </div>
                {recipesStr}
            </div>
        )
    }
} 