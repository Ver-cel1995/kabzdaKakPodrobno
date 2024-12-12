import React, {useMemo, useState} from "react";


export default {
    title: 'UseStateDemo',
    // Использовать разные имена с созданными ниже компонентами
}

const generateData = () => {
    // представим что здесь сложный цикл генерации числа
    console.log('generateData')
    return 432544356546
}

export const Example1 = () => {
    console.log('Example1')
   const [count, setCount] = useState(0); // как useMemo - запомнило значение(не функцию) единожды. Проверить в консоли

    const changer = (state: number) => { // всегда актуальное значение count
        return state + 1;
    }

   return (
       <>
        {/*<button onClick={ () => setCount(count + 1) }>+</button>*/}
        <button onClick={ () => setCount(changer) }>+</button>
           <span>{count}</span>
       </>
   )
}