import React from "react"

export default function Main(props){
    return (
        <main>
            <div className="main--travel">
                <img className="travel--img" src={`../images/${props.item.imageUrl}`} />
                
                <div className="travel--details">
                    <div className="travel--location-details">
                        <i className="fa-solid fa-location-dot travel--logo"></i>
                        <p className="travel--location">{props.item.location}</p>
                        <a href={props.item.googleMapsUrl} target="_blank"><p className="travel--link">View on Google Maps</p></a>
                    </div>
                    <h1 className="travel--title">{props.item.title}</h1>
                    <p className="travel--date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="travel--desc">
                        {props.item.description}
                    </p>
                </div>
            </div>
        </main>
    )
}