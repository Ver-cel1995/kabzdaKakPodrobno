import React, {useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string;
    value: any;
}

type SelectType = {
    value?: any;
    onChange: (value: any) => void;
    items: ItemType[]
}

function Select(props: SelectType) {


    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElement)

    const activedSelect = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value);
        activedSelect();
    }

    const onKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
        for( let i = 0; i < props.items.length; i++ ) {
            if ( props.items[i].value === hoveredItem ){
                setHoveredElement(props.items[i+1].value);
                break
            }
        }
    }

    return (
        <>
            <div tabIndex={0} className={s.select} onKeyUp={ onKeyUp }>
                <span className={s.main} onClick={activedSelect}>{selectedItem?.title}</span>
                {active &&
                    <div className={s.items}>
                        {props.items.map((el, index) => {
                            return (
                                <div onMouseEnter={ () => setHoveredElement(el.value) } className={s.item + ' ' + (hoveredItem === el ? s.selected : '')} key={index}
                                     onClick={() => onItemClick(el.value)}>
                                    {el.title}
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    );
}

export default Select;