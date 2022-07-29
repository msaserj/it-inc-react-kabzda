import React from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    title: 'Select stories',
    component: Select
}

const callback = action("value changed")

export const WithValue = () => <Select
    items={[{title: "Minsk", value: "1"}, {title: "Moskva", value: "2"}, {title: "Kostroma", value: "5"}]}
    onChange={callback}
    value={"2"}/>


export const WithOutValue = () => <Select
    items={[{title: "Minsk", value: "1"}, {title: "Moskva", value: "2"}, {title: "Kostroma", value: "5"}]}
    onChange={callback}
/>
