import React, {useState} from 'react';
import './App.css';

import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";

function App() {
    console.log("App rendered")

    let [rattingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <PageTitle title="some title"/>
            -----
            -----
            <UncontrolledAccordion titleValue={"menu"}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledRating   onChange={value => value}/>
            -----
            -----
            <Rating value={rattingValue} onClick={setRatingValue}/>
            <Accordion
                titleValue="menu"
                collapsed={accordionCollapsed}
                onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}
                items={[{title: "Vasya", value: 1}, {title: "Alex", value: 2}, {title: "Pasha", value: 3}]}  onClick={x=>x}/>
            <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>
            -----
            <Select items={[{title: "Vasya", value: 1}, {title: "Alex", value: 2}]} onChange={x=>x} value={2}/>

        </div>
    );
}

type PageTitlePropsTitle = {
    title: string
}

function PageTitle(props: PageTitlePropsTitle) {
    return <h1>{props.title}</h1>
}


export default App;
