import LettersItem from "./LettersItem"

export default function Letters(props){

    function renderLetters(){
        const letterItemsComps = props.chosenWordObj.map(
            (obj) => {
                if (!obj.found){
                    return <LettersItem letter="" />
                } else {
                    
                    return <LettersItem letter={obj.letter.toUpperCase()}/>
                }
            } )

         return letterItemsComps   
    }

    return(
        <section className="lettersSection">
            {renderLetters()}
        </section>
    )
}