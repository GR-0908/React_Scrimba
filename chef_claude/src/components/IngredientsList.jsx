import { Fragment } from "react";

export default function IngredientsList(props){

    function itemsListIngredients(){
        let list = props.ingredientsArray.map((ingredient) => {
            return <li className="listIngItem"> {ingredient} </li>

        })

        return list;
    }


    return(
        <Fragment>
            <div className="ingredientList">
                <h1 className="ingredientListTitle"> Ingredients on hand:</h1>
                <ul>
                    {itemsListIngredients()}
                </ul>
            </div>

            <div className="getRecipeCard">
                <div className="recipeCardText">
                    <p className="recipeCardTextTitle">Ready for a recipe?</p>
                    <p className="recipeCardTextDescription">Generate a recipe from your list of ingredients</p>
                </div>

                <button className="recipeCardButton" onClick={props.buttonGetRecipeListener}>Get a recipe</button>
            </div>
        </Fragment>
    )
}