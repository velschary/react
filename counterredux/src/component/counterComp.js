import React from 'react';
import { connect } from 'react-redux';
import { CounterIncrement, CounterDecrement } from '../action/counterAction';

const CounterComp = props => {
    console.log(props)
    return <div>
        <h1>USING MAP count:-{props.count}</h1>
        <button onClick={props.CounterIncrement}>INCREMENT</button>&nbsp;
        <button onClick={props.CounterDecrement}>DECREMENT</button>
    </div>;
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CounterIncrement:()=>dispatch(CounterIncrement()),
        CounterDecrement:()=>dispatch(CounterDecrement())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(CounterComp)