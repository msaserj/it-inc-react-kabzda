import React from "react";


type PropsType = {
    on: boolean
}


export const OnOff = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : ""
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "" : "red"
    }
    const lampStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "5px",
        border: "2px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.on ? "green" : "red"
    }
    return (
        <div>
            {/*On*/}
            <div className="on">
                <div style={onStyle} >ON</div>
                <div style={offStyle} >OFF</div>
                <div style={lampStyle}/>
            </div>
        </div>
    )
}