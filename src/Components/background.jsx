import React from "react"


export default function BG({image}) {
    return (
        <div style={{width:"100%",height:"100vh"}}>
            <img src={require(`../Components/Images/${image}`)} style={{width:"100%",height:"100%",position:"absolute"}}/>
        </div>
    )
}