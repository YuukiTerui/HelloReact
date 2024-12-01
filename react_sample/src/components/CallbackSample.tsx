import React, { memo, useState, useCallback } from "react";

type ButtonProps = {
    onClick: () => void
}

const DecrementButton = (props: ButtonProps) => {
    const { onClick } = props;
    console.log("DecrementButton");
    return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = memo((props: ButtonProps) => {
    const { onClick } = props;
    console.log("IncrementButton");
    return <button onClick={onClick}>Increment</button>
})

const DoubleButton = memo((props: ButtonProps) => {
    const { onClick } = props;
    console.log("DoubleButton");
    return <button onClick={onClick}>Double</button>
})

export const CallbackSample = () => {
    const [cnt, setCount] = useState(0);
    const decrement = () => { setCount((c) => c-1)}
    const increment = () => { setCount((c) => c+1)}
    const double = useCallback(() =>{
        setCount((c) => c * 2);
    }, []);
    return (
        <div>
            Count: {cnt}  <DecrementButton onClick={decrement}/><IncrementButton onClick={increment}/><DoubleButton onClick={double}/>
        </div>
    )
}
