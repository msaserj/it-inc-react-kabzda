import React, {useState} from 'react';
import './App.css';

import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";

function App() {
    console.log("App rendered")

    let [rattingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion titleValue={"menu"}/>
            <UncontrolledAccordion titleValue={"users"}/>
            <UncontrolledRating  />
            <Rating value={rattingValue} onClick={setRatingValue}/>
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
