import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion
}

const callback = action("Accordion clicked")
const onClickcallback = action("some item was clicked")

export const CollapsedMode = () => <Accordion
    collapsed={false}
    onChange={callback}
    titleValue="menu1"
    items={[]}
    onClick={onClickcallback}/>
export const UncollapsedMode = () => <Accordion
    collapsed={true}
    onChange={callback}
    titleValue="menu2"
    items={[{title: "Vasya", value: 1}, {title: "Alex", value: 2}, {title: "Pasha", value: 5}]}
    onClick={onClickcallback}/>

export const CollapsingAccordion = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion
        collapsed={value}
        onChange={() => {setValue(!value)}}
        titleValue="menu3"
        items={[{title: "Vasya", value: 1}, {title: "Alex", value: 2}, {title: "Pasha", value: 5}]}
        onClick={onClickcallback}/>
}