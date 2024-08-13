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


    return (
        <div>
            <div><AccordionTitle title={props.titleValue + `: Uncontrolled`}
                                 onChange={() => dispatch({type: "TOGGLE-COLLAPSED"})}/></div>
            {state.collapsed
                ? <div><AccordionMenu items={items}/></div>
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
        </ul>
    )
}

export default Accordion;