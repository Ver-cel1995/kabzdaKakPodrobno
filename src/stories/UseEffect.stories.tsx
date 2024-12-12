import React, {useEffect, useMemo, useState} from "react";


export default {
    title: 'UseEffect',
    // Использовать разные имена с созданными ниже компонентами
}


export const Example1 = () => {
    console.log('Example1')
    const [count, setCount] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log('UseEffect срабатывает каждый раз рендера')
        document.title = count.toString()
    });

    useEffect(() => {
        console.log('UseEffect срабатывает при 1-м ренедере')
        document.title = count.toString()
    }, []);

    useEffect(() => {
        console.log('UseEffect срабатывает при изменении зависимости(стейта)')
        document.title = count.toString()
    }, [count]);

    return (
        <>
            <h1>Hello, {count} {fake}</h1>
            <button onClick={() => setFake(fake + 1)}>Fake+</button>
            <button onClick={() => setCount(count + 1)}>Count+</button>
        </>
    )
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [count, setCount] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        setTimeout(() => { // через какое-то время выполнять функцию
            document.title = count.toString()
        }, 1000)

    }, [count]);

    return (
        <>
            <h1>Hello, {count} {fake}</h1>
            <button onClick={() => setFake(fake + 1)}>Fake+</button>
            <button onClick={() => setCount(count + 1)}>Count+</button>
        </>
    )
}

export const SetIntervalExample = () => {
    console.log('SetTimeoutExample')
    const [count, setCount] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        // setInterval(() => {
        //     setCount(count + 1);
        // }, 1000)
    }, [count]);

    return (
        <>
            <span>Hello, {count} {fake}</span>
            <button onClick={() => setFake(fake + 1)}>Fake+</button>
            <button onClick={() => setCount(count + 1)}>Count+</button>
        </>
    )
}

export const Clock = () => {
    const [clock, setClock] = useState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    });

    useEffect(() => {
        setInterval(() => {
            let time= new Date()
            setClock(
                {
                    hours: time.getHours(),
                    minutes: time.getMinutes(),
                    seconds: time.getSeconds()
                }
            )
        }, 1000)
    }, []);

    return (
        <>
            <span>{clock.hours}:</span>
            <span>{String(clock.minutes).padStart(2, '0')}:</span>
            <span>{String(clock.seconds).padStart(2, '0')}</span>
        </>
    )
}