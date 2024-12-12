import React, {useReducer, useState} from 'react';

export type itemType = {
    title: string
    value: any // потому что димыч сказал: "потому что"!)) Ребёнок может передать родителю разный тип данных
}

type AccordionType = {
    titleValue: string
    collapsed?: boolean
    items: itemType[]
    onClick: (value: any) => void
}

type SwitchAccordionType = {
    type: "TOGGLE-COLLAPSED"

}

type accordionType = SwitchAccordionType

const reducer = (state: boolean, action: accordionType): boolean => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED": {
            return !state
        }
    }
}

function Accordion(props: AccordionType) {

    const [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <div>
            <div ><AccordionTitle title={props.titleValue} onChange={() => dispatch({type: "TOGGLE-COLLAPSED"}) }/></div>
            {collapsed
                ? <div><AccordionMenu items={props.items} onClick={props.onClick}/></div>
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
    onClick: (value: any) => void
}

function AccordionMenu(props: AccordionMenuType) {

    return (
        <ul>
            {props.items.map((el, index) => {
                return <li onClick={ () => {props.onClick(el.value)} } key={index}>{el.title}</li>
            })}
        </ul>
    )
}

export default Accordion;