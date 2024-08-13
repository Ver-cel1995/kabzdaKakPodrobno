import React, {useState} from 'react';

type AccordionType = {
    titleValue: string
    collapsed?: boolean
}

function Accordion(props: AccordionType) {

    const [accordion, setAccordion] = useState(true);

    const accordionHandler = () => {
        setAccordion(!accordion);
    }


    return (
        <div>
            <div onClick={accordionHandler}><AccordionTitle title={props.titleValue}/></div>
            {accordion
                ? <div><AccordionMenu/></div>
                : false
            }
        </div>
    )
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3>{props.title}</h3>
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