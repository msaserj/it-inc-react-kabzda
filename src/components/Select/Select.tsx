import React, {useState, KeyboardEvent, useEffect} from "react";
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
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)


    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const togleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        togleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i+1]
                        : props.items[i-1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break;
                    }
                }
            }
        }
    }

    return (
        <>
            <div className={css.select}
                 tabIndex={0}
                 onKeyUp={onKeyUp}
            >
                <span className={css.main} onClick={togleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={css.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={css.item + " " + (hoveredItem === i ? css.selected : "")}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}

                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </>

    )
}
