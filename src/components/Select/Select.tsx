import React from "react";
import css from './Select.module.css'

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

type ItemType = {
    title: string
    value: any
}


export function Select(props: SelectPropsType) {
    console.log("UncontrolledRating rendered")
    const selectedItem = props.items.find(i => i.value === props.value)
    return (
        <>
            <select name="Cities">
                <option value="1">Minsk</option>
                <option value="2">Moskva</option>
                <option value="3">Kostroma</option>
            </select>
            <div className={css.select}>

                <h3>{selectedItem && selectedItem.title}</h3>
                <div className={css.items}>
                    {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                </div>

            </div>
        </>

    )
}
