import {action} from "@storybook/addon-actions";
import {RatingValueType} from "../01/Rating";
import {OnOff} from "./OnOff";

export default {
    title: 'On-Off stories',
    component: OnOff, // Использовать разные имена с созданными ниже компонентами
}



export const DefaultOnOff = () => <OnOff value={true} />

