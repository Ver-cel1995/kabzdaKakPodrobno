import React, {useMemo, useState} from "react";


export default {
    title: 'UseMemo',
    // Использовать разные имена с созданными ниже компонентами
}

export const Example1 = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)


    // создания факториала - попытка загрузить проц
    // т.к. при изменение любого стейта перерисовывается вся компонента
    // то даже resultB будет тормозить, хотя сложные вычесления только в resultА

    let resultA = 1;
    let resultB = 1;

    for (let i = 1; i <= a; i++) {
        let fake = 0
        while (fake < 10000000) {
            fake++
            const fakeValue = Math.random()
        }
        resultA = resultA * i
    }

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    //

    return (
        <>
            <input value={a} onChange={e => setA(Number(e.currentTarget.value))}/> {/*превратить строку в число*/}
            <input value={b} onChange={e => setB(+e.currentTarget.value)}/> {/*превратить строку в число*/}
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

export const Example2 = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)


    // добавляем в useMemo ту колбэк-функцию, которую нужно отслеживать, чтоб
    // при отрисовки компоненты эта функция заново не обновлялась
    // и добавляем ту зависимость за которой нужно следить ... ,[a]
    // useMemo ( функция, за кем нужно следить )

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo( () => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = resultA * i
        }
        return tempResultA
    }, [a] )




    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    //

    return (
        <>
            <input value={a} onChange={e => setA(Number(e.currentTarget.value))}/> {/*превратить строку в число*/}
            <input value={b} onChange={e => setB(+e.currentTarget.value)}/> {/*превратить строку в число*/}
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}