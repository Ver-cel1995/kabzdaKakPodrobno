import React, {useReducer} from 'react';
import {reducer} from "./Reducer";

export type itemType = {
    title: string
    value: any // потому что димыч сказал: "потому что"!)) Ребёнок может передать родителю разный тип данных
}

const items: itemType[] = [
    {title: 'Andrew', value: '1'},
    {title: 'Dima', value: '2'},
    {title: 'Aleksei', value: '3'},
]

type AccordionType = {
    titleValue: string
}

function Accordion(props: AccordionType) {
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

import React, {useState} from 'react';

type AccordionType = {
    titleValue: string
    collapsed?: boolean
    onChange: () => void
}

function Accordion(props: AccordionType) {
    return (
        <div>

            <div><AccordionTitle title={props.titleValue + `: Uncontrolled`}
                                 onChange={() => dispatch({type: "TOGGLE-COLLAPSED"})}/></div>
            {state.collapsed
                ? <div><AccordionMenu items={items}/></div>

            <div ><AccordionTitle title={props.titleValue} onChange={props.onChange}/></div>
            {props.collapsed
                ? <div><AccordionMenu/></div>
                : false
            }
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

type AccordionMenuType = {
    // collapsed: boolean
    items: itemType[]
    // onClick: (value: any) => void
}

function AccordionMenu(props: AccordionMenuType) {

    return (
        <ul>
            {props.items.map((el, index) => {
                return <li key={index}>{el.title}</li>
            })}

}

function AccordionMenu(props: AccordionMenuType) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;