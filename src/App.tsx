import React, {useState} from 'react';
import './App.css';

import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
    console.log("App rendered")

    let [rattingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>


            <UncontrolledAccordion titleValue={"menu"}/>
            <UncontrolledRating />
            -----
            <Rating value={rattingValue} onClick={setRatingValue}/>
            <Accordion
                titleValue="menu"
                collapsed={accordionCollapsed}
                onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
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
