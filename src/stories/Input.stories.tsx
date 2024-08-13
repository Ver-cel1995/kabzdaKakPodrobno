import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Input',
    // component: Accordion,// Использовать разные имена с созданными ниже компонентами
};


export const UncontrolledInput = () => <input/>
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("");

    const onChangeHandler = (event:  ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)}

    return (
    <> <input onChange={onChangeHandler}/> - {value} </>
    )
}

export const GetValueUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");

    const inputRef = useRef<HTMLInputElement>(null );


    return (
    <>
        <input ref={inputRef}/>
        <button onClick={ (e) => {
            const el = inputRef.current as HTMLInputElement;

            setValue(el.value);
        } }>save</button> - actual value: {value}
    </>
    )
}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");

    return (
        <input value={parentValue} onChange={action('123443fdfs')}/>
    )
}
export const ControlledCheckbox = () => {
    return (
        <input type='checkbox'/>
    )
}

export const ControlledSelect = () => {
    return (
        <input type='select'/>
    )
}