import React, {useState} from 'react';

type OnOffType = {
    value?: boolean
}



export function OnOff(props: OnOffType) {

    const [onOff, setOnOff] = useState(true);



    const wrapOnOff = {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
    }

    const onStyle = {
        border: '1px solid black',
        padding: '10px',
        backgroundColor: onOff ? 'green' : 'white',
    }
    const offStyle = {
        border: '1px solid black',
        padding: '10px',
        backgroundColor: onOff ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: '1px solid black',
        background: onOff ? 'green' : 'red'
    }


    return (
        <div style={wrapOnOff}>
            <div style={onStyle} onClick={() => setOnOff(true)}>on</div>
            <div style={offStyle} onClick={() => setOnOff(false)}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}