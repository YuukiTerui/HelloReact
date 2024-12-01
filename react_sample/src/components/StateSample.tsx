import { useState } from "react";

type CounterProps = {
    initialValue: number
}

const Counter = (props: CounterProps) => {
    const { initialValue } = props;
    let [cnt, setCount] = useState(initialValue);

    return (
        <div>
            <p>Count: {cnt}</p>
            <button onClick={()=>setCount(cnt-1)}>-</button>
            <button onClick={()=>setCount((prevCount) => prevCount + 1)}>+</button>
        </div>
    )
}

export default Counter;