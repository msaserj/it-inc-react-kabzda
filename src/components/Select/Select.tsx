import React, {useState} from "react";
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

    const [active, setActive] = useState(false)

    const selectedItem = props.items.find(i => i.value === props.value)
    const togleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        togleItems()
    }

    return (
        <>
            <div className={css.select}>
                <span className={css.main} onClick={togleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={css.items}>
                        {props.items.map(i => <div
                            key={i.value}
                            onClick={()=> {onItemClick(i.value)} }

                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </>

    )
}
