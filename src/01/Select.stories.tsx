import {action} from "@storybook/addon-actions";
import Select from "./Select";
import {itemType} from "./SetAccordion";
import {ChangeEvent, useState} from "react";
import SelectChangeTitle from "./SelectChangeTitle";

export default {
    title: 'Select',
    component: Select,
}

const callback = action('value change')
const callback1 = action('123')

export const ModeSelect = () => {
    const items = [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Krasnodar'},
    ]

    let a = items.length > 0 ? items[0].title : '';

    const [title, setTitle] = useState(a)
    const changeHandler = (value: string) => {
        const selectedItem = items.find((it) => it.value === value)
       if (selectedItem) {
           setTitle(selectedItem.title)
       }
    }

    return (
        <SelectChangeTitle onChange={callback}
                title={title}
                items={items}
                onClick={changeHandler}/>
    )
}

export const DefaultSelect = () => {

    const [title, setTitle] = useState('1')

    const items = [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Krasnodar'},
    ]

    return (
        <Select onChange={setTitle}
                value={title}
                items={items}
                title={''}/>
    )
}

