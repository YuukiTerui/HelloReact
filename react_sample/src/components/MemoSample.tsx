import React, { useState, useMemo } from 'react';

export const UseMemoSample = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState<string[]>([]);
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const onClickButton = () => {
        setItems((prevItems) => {
            return [...prevItems, text]
        });
        setText('');
    }

    const numberOfCharacter1 = items.reduce((sub, item) => {console.log('num1');return sub + item.length;}, 0)
    const numberOfCharacter2 = useMemo(() => {
        return items.reduce((sub, item) => {console.log('num2'); return sub + item.length;}, 0)
    }, [items]);

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item, idx) => (
                    <p key={idx}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total Number of Characters 1 : {numberOfCharacter1}</p>
                <p>Total Number of Characters 2 : {numberOfCharacter2}</p>
            </div>
        </div>
    )
}

