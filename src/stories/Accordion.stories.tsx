import Accordion from "../01/Accordion";
import UncontrolledAccordion, {itemType} from "../01/SetAccordion";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";



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
                               items={users}
                               onClick={ action('onClick Accordion') }/>
    )
}