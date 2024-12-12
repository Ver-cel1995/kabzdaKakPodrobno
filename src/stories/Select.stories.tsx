import {action} from "@storybook/addon-actions";
import Select from "../02/Select";
import {useState} from "react";

export default {
    title: 'Select',
    component: Select, // Использовать разные имена с созданными ниже компонентами
}

const callback = action('value star') // storybook отображает во вкладке "actions" какие значение приходят

export const SelectBasic = () => {
    const [value, setValue] = useState('2');

    return (
        <Select value={value}
                onChange={setValue}
                items={
                    [
                        {title: 'Moscow', value: '1'},
                        {title: 'Rostov', value: '2'},
                        {title: 'Krasnodar', value: '3'},
                    ]
                }/>
    )
}

export const WithoutValue = () => {

    const [value, setValue] = useState(null);


    return (
        <Select value={value}
                onChange={setValue}
                items={
                    [
                        {title: 'Moscow', value: '1'},
                        {title: 'Rostov', value: '2'},
                        {title: 'Krasnodar', value: '3'},
                    ]
                }/>
    )
}


