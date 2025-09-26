export default function EliminationItems(props){

    function setClassname(){
        if (props.wrongState){
            return "eliminationItem elModifier"
        } else {
            return "eliminationItem"
        }
    }

    const cl = setClassname()

    return(
        
            <div className={cl} style={{backgroundColor: props.languageStyle.backgroundColor
                                                    ,color: props.languageStyle.color }}>
                {props.languageStyle.name}
            </div>

    )
}