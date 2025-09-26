import { Fragment } from "react";
import ReactMarkdown from 'react-markdown'

export default function RecipeComponent({ recipe }) {
    return (
        <Fragment>
        <div className="recipeCard">
            <h1>Suggested recipe:</h1>
            <div className="recipeText">
                <ReactMarkdown  children={recipe}/>
            </div>
            
        </div>    
        </Fragment>
    )
}
