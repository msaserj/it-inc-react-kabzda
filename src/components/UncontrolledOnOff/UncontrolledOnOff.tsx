import React, {useState} from "react";


type PropsType = {
    //on: boolean
    onChange: (on: boolean) => void
    defaultOn?: boolean
}


export const UncontrolledOnOff = (props: PropsType) => {


    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "",
        cursor: "pointer"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: on ? "" : "red",
        cursor: "pointer"
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