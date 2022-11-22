import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterDecrement, CounterIncrement } from '../action/counterAction';

const HookCounterComp = props => {
    const selector=useSelector(state=>state)
    const dispatch=useDispatch()
    return <div>
        <h1>COUNTER USING HOOK:-{selector.count}</h1>
        <button onClick={()=>dispatch(CounterIncrement())}>INCREMENT</button>&nbsp;
        <button onClick={()=>dispatch(CounterDecrement())}>DECREMENT</button>
    </div>;
};
export default HookCounterComp;