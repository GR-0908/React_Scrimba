import { useState } from "react"
import RecipeComponent from "./RecipeComponent";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from '../ai.js';

export default function Main(){
    const [ingredients, setIngredients] = useState([]);
    const [showRecipe, setShowRecipe] = useState(false);
    const [recipe, setRecipe] = useState("");

    function handleIngredients(formData){
        const newIngredient = formData.get("ingredientItem");
        setIngredients([...ingredients, newIngredient]);
    }

    async function handleGetRecipe() {
        if(!showRecipe) setShowRecipe(true);
        const result = await getRecipeFromMistral(ingredients);
        setRecipe(result);
    }

    return(
        <main>
            <form action={handleIngredients}>
                <input name="ingredientItem" placeholder="e.g. oregano" />
                <button>+ Add ingredient</button>
            </form>

            
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredientsArray={ingredients} 
                    buttonGetRecipeListener={handleGetRecipe}
                />
            }
            {showRecipe && <RecipeComponent recipe={recipe}/>}
        
        </main>
    )
}
