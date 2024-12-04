import { useState, useEffect } from 'react';

function ApiSample() {
    const [ data, setData ] = useState({name: ''});
    useEffect(()=>{
        console.log('api sample');
        fetch('api/hello')
        .then((res) => res.json())
        .then((profile) => setData(profile))
    }, []);

    return <div>hello {data.name}</div>
}

export default ApiSample;