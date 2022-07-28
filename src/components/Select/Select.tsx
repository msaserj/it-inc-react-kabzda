import React from "react";

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

type ItemType = {
    title: string
    value: any
}


export function Select(props: SelectPropsType) {
    console.log("UncontrolledRating rendered")
    return (
        <div>
            <div>{}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}
