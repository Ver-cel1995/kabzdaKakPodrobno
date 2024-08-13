import Accordion from "./Accordion";
import UncontrolledAccordion, {itemType} from "./SetAccordion";
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
        <UncontrolledAccordion titleValue={'menu'}
                               collapsed={collapsed}
                               onChange={ () => setCollapsed(!collapsed)}
                               items={[]}
                               onClick={ action('onClick Accordion') }/>
    )
}

export const OpenAccordions = () => {
    const users: itemType[] = [
        {title: 'alex', value: 1},
        {title: 'Sergei', value: 2},
        {title: 'Tamara', value: 3},
    ]

    return (
        <UncontrolledAccordion titleValue={'users'}
                               collapsed={true}
                               onChange={callback}
                               items={users}
                               onClick={ action('onClick Accordion') }/>
    )
}