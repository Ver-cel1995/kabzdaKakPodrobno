import React, {useState} from 'react';
import {itemType} from "./SetAccordion";
import styles from "./Select.module.css";


type SelectType = {
    onChange: (value: any) => void
    items: itemType[]
    value?: string
    title: string
}

function Select(props: SelectType) {

    const [select, setSelected] = useState(false);

    const selectedItem = props.items.find(item => item.value === props.value)

    const onClickItemTitle = (value: string) => {
        props.onChange(value);
        setSelected(false)
    }

    return (
        <>
            <div className={styles.select}>
                <h3 onClick={() => setSelected(!select)}
                    className={styles.title}>{selectedItem && selectedItem.title}</h3>
                {
                    select &&
                    <div className={styles.items}>
                        {props.items.map((el, index) =>
                            <ul key={el.value}
                                className={styles.wrapItem}>
                                <li className={styles.item}
                                    onClick={ () => onClickItemTitle(el.value) }>
                                    {el.title}
                                </li>
                            </ul>
                        )}
                    </div>
                }
            </div>
        </>
    );
}

export default Select;