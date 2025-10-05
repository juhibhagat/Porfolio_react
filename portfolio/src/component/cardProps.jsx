import React from "react"

export function CardProps({title, path,descriptioon}){
    return(
        <div className="card w-25">
            <div className="card-header">
            <h2>{title}</h2>
            </div>
            <div className="card-body">
                 <img src={path} alt="" width="100%" />
            </div>
            <div className="card-footer">
                    <button>{descriptioon}</button>
            </div>
        </div>
    )
} 