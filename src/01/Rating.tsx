import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingType = {
    value: RatingValueType
    onClickStar: (value: RatingValueType) => void
}

function Rating(props: RatingType) {

    return (
        <div>
            <Star selected={props.value > 0} onClickStar={props.onClickStar} value={1} />
            <Star selected={props.value > 1} onClickStar={props.onClickStar} value={2}/>
            <Star selected={props.value > 2} onClickStar={props.onClickStar} value={3}/>
            <Star selected={props.value > 3} onClickStar={props.onClickStar} value={4}/>
            <Star selected={props.value > 4} onClickStar={props.onClickStar} value={5}/>
        </div>
    );
}

type StarType = {
    selected: boolean
    value: RatingValueType
    onClickStar: (value: RatingValueType) => void

}

function Star(props: StarType) {
    return (
        <span onClick={ () => props.onClickStar(props.value)}>
            {props.selected ? <b>star </b> : "star "}
        </span>
    )
}

export default Rating;