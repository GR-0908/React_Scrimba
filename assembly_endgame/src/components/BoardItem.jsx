import { useState } from "react"

export default function BoardItem(props){

    function setClass(){
        if(props.wrongLetter && props.pressed){
            return "boardButton wrongLetter"
        } else if (!props.wrongLetter && props.pressed){
            return "boardButton rightLetter"
        } else if (!props.pressed){
            return "boardButton"
        }
        
    }

    const btnClass = setClass();


    return(
        <button className={btnClass} onClick={props.handleClickBoard}> {props.letter}</button>
    )
}