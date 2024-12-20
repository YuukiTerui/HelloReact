import React from "react";

const Name = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }
    return (
        <div style={{padding: '16px', backgroundColor: 'gray'}}>
            <label htmlFor="name">名前</label>
            <input id="name" className="input-name" type="text" onChange={onChange} />
        </div>
    )
}

export default Name;