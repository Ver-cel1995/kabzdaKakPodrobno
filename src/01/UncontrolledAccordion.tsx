import React, {useState} from 'react';

type AccordionType = {
    titleValue: string
    collapsed?: boolean
    onChange: () => void
}

function Accordion(props: AccordionType) {



    return (
        <div>
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