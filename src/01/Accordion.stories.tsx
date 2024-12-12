import Accordion from "./Accordion";
import UncontrolledAccordion from "./UncontrolledAccordion";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {RatingValueType} from "./Rating";



export default {
    component: Accordion,// Использовать разные имена с созданными ниже компонентами
};

const callback = action('collapsed Accordion')

const onChangeHnadler = action("onChange");
export const StateAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <UncontrolledAccordion titleValue={'menu'} collapsed={collapsed} onChange={ () => setCollapsed(!collapsed)}/>
    )
}

export const OpenAccordions = () => {
    return (
        <UncontrolledAccordion titleValue={'menu'} collapsed={true} onChange={callback}/>
    )
}