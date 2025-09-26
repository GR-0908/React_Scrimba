import EliminationItems from "./EliminationItems"

export default function Eliminations(props){

    function renderEliminations(){
        return props.languages.map((lang, index) => {
            if(index < props.numberOfEliminations){
                return <EliminationItems languageStyle={lang} wrongState={true}/>
            } else {
                return <EliminationItems languageStyle={lang} wrongState={false}/>
            }

        })
    }


    return(
        <section className="eliminations">
            {renderEliminations()}            
        </section>

    )
}