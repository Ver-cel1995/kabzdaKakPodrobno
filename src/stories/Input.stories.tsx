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

            setValue(el.value);} } >
            save
        </button> - actual value: {value}
    </>
    )
}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");

    return (
        <input value={parentValue}
               onChange={ (e) => setParentValue(e.currentTarget.value) }/>
    )
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true);

    return (
        <input type={'checkbox'}
               checked={parentValue}
               onChange={ (e) => setParentValue(e.currentTarget.checked) }/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1');

    return (
        <select value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}>
            <option>none</option>
            <option value="2">Moscow</option>
            <option value="1">Piter</option>
            <option value="3">Krasnodar</option>
        </select>
    )
}