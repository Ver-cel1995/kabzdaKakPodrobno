import React, {useEffect, useState} from 'react';

type PropsType = {
}

export function Clock(props: PropsType) {

    const [clock, setClock] = useState(new Date());

    const get2Strings = (num: number) => num < 10 ? 0 + num : num;

    useEffect(() => {


        const intervalId = setInterval( () => {
            setClock(new Date())
        }, 1000 )


        return () => { // что присходит, когда "умирает" компонента
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            <span>{get2Strings(new Date().getHours())}:</span>
            <span>{get2Strings(new Date().getMinutes())}:</span>
            <span>{get2Strings(new Date().getSeconds())}</span>
        </div>
    );
}