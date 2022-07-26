import React, {useState} from "react";


type PropsType = {
    //on: boolean
}


export const OnOff = (props: PropsType) => {


    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : ""
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: on ? "" : "red"
    }
    const lampStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "5px",
        border: "2px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red"
    }
    return (
        <div>
            {/*On*/}
            <div className="on">
                <div style={onStyle} onClick={()=>{setOn(true)}} >ON</div>
                <div style={offStyle} onClick={()=>{setOn(false)}} >OFF</div>
                <div style={lampStyle}/>
            </div>
        </div>
    )
}