import {action} from "@storybook/addon-actions";
import React, {useState} from "react";

export default {
    title: 'ReactMemo demo',
    // component: Accordion,// Использовать разные имена с созданными ниже компонентами
};

const Counter = (props: any) => {
    return <div>{props.count}</div>;
}
const UsersSecret = (props: { users: string[] }) => {
    console.log('render')
    return <div>{
        props.users.map((el, index) => {
            return <li key={index}>{el}</li>;
        })
    }</div>;
}

const Users = React.memo(UsersSecret)

export const Examples1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['alex', 'dmitry', 'Toma'])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <Counter count={counter}/>
            <Users users={users}/>
        </>
    )
}