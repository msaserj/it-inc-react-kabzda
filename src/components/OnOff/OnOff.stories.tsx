import React, {useState} from 'react';

import {OnOff} from '../OnOff/OnOff'


export default {
    title: 'OnOff stories',
    component: OnOff
}

export const OnMode = () => <OnOff on={true} onChange={x=>x}/>
export const OffMode = () => <OnOff on={false} onChange={x=>x}/>

export const OnOffChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} onChange={setValue}/>
}