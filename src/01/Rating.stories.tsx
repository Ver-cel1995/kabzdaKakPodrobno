import Rating, {RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: 'Rating stories',
    component: Rating, // Использовать разные имена с созданными ниже компонентами
}

const callback = action('value star') // storybook отображает во вкладке "actions" какие значение приходят

export const DefaultRating = () => <Rating value={0} onClickStar={callback}/> // storybook отображает во вкладке "actions" какие значение приходят
export const Rating1 = () => <Rating value={1} onClickStar={callback}/>
export const Rating2 = () => <Rating value={2} onClickStar={() => (2) }/>
export const Rating3 = () => <Rating value={3} onClickStar={() => (3) }/>
export const Rating4 = () => <Rating value={4} onClickStar={() => (4) }/>
export const ChangeRating = () => {
    const [reting, setReting] = useState<RatingValueType>(0);
   return <Rating value={reting} onClickStar={setReting}/>
}