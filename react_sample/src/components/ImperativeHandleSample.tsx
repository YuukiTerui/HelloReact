import React, { useState, useRef, useImperativeHandle } from 'react';


const Child = React.forwardRef((props, ref) => {
    const [msg, setMsg] = useState<string | null>(null);
    useImperativeHandle(ref, () => ({
        showMsg: () => {
            const date = new Date();
            const msg = `Hello, it's ${date.toLocaleDateString()} now`;
            setMsg(msg);
        },
    }))
    return <div>{msg !== null ? <p>{msg}</p> : null}</div>
})

export const ImperativeHndleSample = () => {
    const childRef = useRef<{ showMsg: () => void}>(null);
    const onClick = () => {
        if (childRef.current !== null) {
            childRef.current.showMsg();
        }
    }
    return (
        <div>
            <button onClick={onClick}>Show Msg</button>
            <Child ref={childRef} />
        </div>
    )
}