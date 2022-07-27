import React, {useState} from "react";


type PropsType = {
    //on: boolean
    onChange: (on: boolean) => void
}


export const UncontrolledOnOff = (props: PropsType) => {


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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            {/*On*/}
            <div className="on">
                <div style={onStyle}
                     onClick={onClicked}>ON
                </div>
                <div style={offStyle}
                     onClick={offClicked}>OFF
                </div>
                <div style={lampStyle}/>
            </div>
        </div>
    )
}