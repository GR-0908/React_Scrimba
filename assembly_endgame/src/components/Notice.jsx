import { Fragment, useRef } from "react"
import { languages } from "../languages"
import { getFarewellText } from '../utils.js';


export default function Notice(props){

    const currEliminations = useRef(0)

    function renderNotice(){
        if((props.gameOver.over) && (props.gameOver.won)){

            currEliminations.current = 0;
            return <div className="notice wonNotice"> You Won </div>

        } else if ((props.gameOver.over) && (!props.gameOver.won)){
            
            currEliminations.current = 0;
            return <div className="notice lostNotice"> You Lost </div>
        
        } else if ((!props.gameOver.over) && (!props.gameOver.won)){
            
            if(props.numberOfEliminations === 0){
            return <div className="notice inactive"></div>
            }

            if(currEliminations.current >= props.numberOfEliminations){
                return <div className="notice inactive"></div>
            } else {
                const phrase = getFarewellText(languages[props.numberOfEliminations - 1].name);
                currEliminations.current += 1;
                return <div className="notice">{phrase}</div>
            }
            
        }
    }     

    return(
        <Fragment>
            <section className="noticeContainer">
                {renderNotice()}
            </section>
        </Fragment>
        
    )
}