import React from 'react';
import './Room.css';

function Room() {
    const [isLit, turnLit] = React.useState(true);
    const [temprature, setTemprature] = React.useState(22);

    return (
        <div className={`room ${isLit? "bright": "dark"}`}>
            Light is {isLit ? "on" : "off"}
            <br/>
            <button onClick={()=>turnLit(true)}>Turn On</button>
            <button onClick={()=>turnLit(false)}>Turn Off</button>
            <br/>
            Room Temprature: {temprature} C
            <br/>
             Change Temperature: 
            <button onClick={()=>setTemprature(x=>x+1)}>+</button>
            <button onClick={()=>setTemprature(x=>x-1)}>-</button>
        </div>
    );
}

export default Room;