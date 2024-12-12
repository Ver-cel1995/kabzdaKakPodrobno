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

<<<<<<< HEAD
            setValue(el.value);} } >
            save
        </button> - actual value: {value}
=======
            setValue(el.value);
        } }>save</button> - actual value: {value}
>>>>>>> 9a02213262917c2c0cd3de4ae52daf24a4a475f1
    </>
    )
}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");

    return (
<<<<<<< HEAD
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
=======
        <input value={parentValue} onChange={action('123443fdfs')}/>
    )
}
export const ControlledCheckbox = () => {
    return (
        <input type='checkbox'/>
>>>>>>> 9a02213262917c2c0cd3de4ae52daf24a4a475f1
    )
}

export const ControlledSelect = () => {
<<<<<<< HEAD
    const [parentValue, setParentValue] = useState<string | undefined>('1');

    return (
        <select value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}>
            <option>none</option>
            <option value="2">Moscow</option>
            <option value="1">Piter</option>
            <option value="3">Krasnodar</option>
        </select>
=======
    return (
        <input type='select'/>
>>>>>>> 9a02213262917c2c0cd3de4ae52daf24a4a475f1
    )
}