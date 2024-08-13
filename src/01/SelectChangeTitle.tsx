import React from 'react';
import {itemType} from "./SetAccordion";
import styles from "./Select.module.css";




type SelectType = {
    onChange: (value: any) => void
    items: itemType[]
    onClick: (value: string) => void
    title?: string
}

function Select(props: SelectType) {

    return (
        <div>
            <h3>{props.title}</h3>
            {props.items.map((el, index) => {
                return (
                    <div onClick={() => props.onClick(el.value)} key={index}>{el.title}</div>
                )
            })}
        </div>
    );
}

export default Select;