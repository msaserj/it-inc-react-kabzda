import React from "react";


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}


export function Rating(props: RatingPropsType) {
    console.log("UncontrolledRating rendered")
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => props.selected
    ? (<span> <b>star</b> </span>)
    : (<span> star </span>)

export const Test = () => <Star selected={true}/>

export type TableTennisType = {
    tennisBall: (tennisBall: object) => void
}