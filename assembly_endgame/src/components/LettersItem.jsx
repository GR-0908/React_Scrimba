import { Fragment } from "react"

export default function LettersItem(props){

    return(
        <Fragment>
            <div className="lettersItem">{props.letter}</div>
        </Fragment>
        
    )
}