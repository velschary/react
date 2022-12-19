import React, {useState} from 'react';

const Normalcounter = props => {
const [state, setState] = useState(props.val);
const inc = () =>{
    setState(state+1)
}
const dec = () =>{
    setState(state-1)
}
    return <div>
        <h1>count - {state}</h1>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
    </div>;
};
export default Normalcounter;