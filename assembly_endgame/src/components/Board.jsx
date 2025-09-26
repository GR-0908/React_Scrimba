import { Fragment } from "react"
import BoardItem from "./BoardItem"

export default function Board({ boardObjectsB, handleClickApp }){


    return(
        <Fragment>
            <section className="board">
                {boardObjectsB.map(bObj => (
                    <BoardItem
                    key={bObj.id}
                    id={bObj.id}
                    letter={bObj.letter}
                    pressed={bObj.pressed}
                    wrongLetter={bObj.wrongLetter}
                    handleClickBoard={() => handleClickApp(bObj.id)}
                    />
                ))}
            </section>
        </Fragment>
    )
}