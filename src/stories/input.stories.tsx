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
