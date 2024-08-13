import React, {useState} from 'react';
import './App.css';
import UncontrolledRating from "./01/UncontrolledRating";
import Accordion from "./01/Accordion";
import Rating, {RatingValueType} from "./01/Rating";
import UncontrolledAccordion from "./01/UncontrolledAccordion";
import {OnOff} from "./02/OnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)


    const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="App">
        {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
        {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
        {/*<UncontrolledRating />*/}
        <OnOff/>
        <UncontrolledAccordion titleValue={'menu'} collapsed={collapsed} onChange={ () => setCollapsed(!collapsed) }/>

        <Rating value={ratingValue} onClickStar={setRatingValue}/>
    </div>
  );
}

export default App;
