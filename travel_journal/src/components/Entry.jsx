import { Fragment } from "react";

function Entry(props){

    return(
        <Fragment>
            <section className="page_body">
                <article className="entry">
                    
                    <picture>
                        <img src={props.image.src}></img>
                    </picture>

                    <div className="entry_content">
                        <div className="location_link_title_wrapper">
                        <div className="location_link">
                            <div className="location">
                                <img src="./src/assets/Fill219.png"></img>
                                <p>{props.country}</p>
                            </div>
                            <p><a href={props.maps_link}>View on Google Maps</a></p>
                        </div>
                        <h1>{props.title}</h1>
                        </div>

                        <div className="dates_text">
                        <p className="date">{props.dates}</p>
                        <p className="text">{props.text}</p>
                        </div>
                        </div>    
                </article>
            </section>
        </Fragment>
    )
}

export default Entry;