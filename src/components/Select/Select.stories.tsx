import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    title: 'Select stories',
    component: Select
}

const callback = action("value changed")

export const WithValue = () => {
    const [value, setValue] = useState("2")
    return<Select
        items={[{title: "Minsk", value: "1"}, {title: "Moskva", value: "2"}, {title: "Kostroma", value: "5"}]}
        onChange={setValue}
        value={value}/>
}


export const WithOutValue = () => {
    const [value, setValue] = useState(null)

    return<Select
        items={[{title: "Minsk", value: "1"}, {title: "Moskva", value: "2"}, {title: "Kostroma", value: "5"}]}
        value={value}
        onChange={setValue}
    />
}
