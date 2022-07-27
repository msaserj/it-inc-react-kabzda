import React from 'react';
import './App.css';

import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    console.log("App rendered")
    return (
        <div className="App">
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*Article 1*/}
            {/*<UncontrolledRating value={3} />*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true} />*/}
            {/*<Accordion titleValue={"Users"} collapsed={false} />*/}
            {/*Article 2*/}
            {/*<UncontrolledRating value={0} />*/}
            {/*<UncontrolledRating value={1} />*/}
            {/*<UncontrolledRating value={2} />*/}
            {/*<UncontrolledRating value={3} />*/}
            {/*<UncontrolledRating value={4} />*/}
            {/*<UncontrolledRating value={5} />*/}
            {/*<Test/>*/}
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion titleValue={"menu"}/>
            <UncontrolledAccordion titleValue={"users"}/>
            <UncontrolledRating  />
            
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
