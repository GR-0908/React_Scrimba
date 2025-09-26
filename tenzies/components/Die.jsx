import { useState } from "react"
import { useEffect } from "react";

export default function Die(props){

     const [classDie, setClassDie] = useState("dieButton");

    useEffect(() => {
        setClassDie(props.hold ? "dieButton active" : "dieButton");
    }, [props.hold]);

    return (
        <button className={classDie} onClick={props.handleClick}>
            {props.value}
        </button>
    );
}