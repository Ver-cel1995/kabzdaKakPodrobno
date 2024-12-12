import React, {useReducer, useState} from 'react';
import './App.css';
import UncontrolledRating from "./01/UncontrolledRating";
import Accordion from "./01/Accordion";
import Rating, {RatingValueType} from "./01/Rating";
import SetAccordion, {itemType} from "./01/SetAccordion";
import {OnOff} from "./02/OnOff";
import {action} from "@storybook/addon-actions";
import UnControlledAccordion from "./01/UnControlledAccordion";
import Select from "./02/Select";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)


    const [collapsed, setCollapsed] = useState(false)

    const items: itemType[] = [
        {title: 'Moscow', value: '1'},
        {title: 'Rostov', value: '2'},
        {title: 'Krasnodar', value: '3'},
    ]

    const users: string[] = ['Sasha', 'Valera', 'Victor', 'Igor']

    return (
        <div className="App">
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<UncontrolledRating />*/}
            <OnOff/>
            <SetAccordion titleValue={'menu'}
                          items={items}
                          onClick={() => {
                          }}/>

            <Rating value={ratingValue} onClickStar={setRatingValue}/>

            <UnControlledAccordion titleValue={'users'}/>
            <Select value={'2'}
                    onChange={ () => {} }
                    items={items}/>
        </div>
    );
}

export default App;
