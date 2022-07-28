import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'input stories',
   //component: UncontrolledRating
}

const callback = action("Rating changed inside component")

export const UncontrolledInput = () => <input />

export const TrackValueUncontrolledInput = () => {
    const[value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return<>
        <input onChange={onChange}/> {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const[value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () =>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return<>

        <input ref={inputRef} /> <button onClick={save}>SAVE</button> - actual value: {value}
    </>
}

export const  ControlledInputWithFixedValue = () => <input value="fixed value"/>

export const  ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}
export const  ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

export const  ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moskva</option>
        <option value="3">Kostroma</option>
    </select>
}
