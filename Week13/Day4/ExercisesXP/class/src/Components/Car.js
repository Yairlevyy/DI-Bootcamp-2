import { useState } from "react";
import Garage from "./Garage";

function Car(props) {
    const [color,setColor] = useState('blue');

    return(
        <>
        <p>This car is {color} {props.carinfo.model}</p>
        <Garage size="small" />
        </>
    )
}

export default Car;