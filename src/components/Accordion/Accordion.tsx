import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<string>
}

export function Accordion(props: AccordionPropsType) {
    // console.log("UncontrolledAccordion rendered")

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed}/>
            {props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>props.onChange()}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: Array<string>
}


function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index)=><li key={index}>{i}</li>)}
    </ul>
}

