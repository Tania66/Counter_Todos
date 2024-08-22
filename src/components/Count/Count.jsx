import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/counter/CounterSlice';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";


const Count = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.counter.value);
  return (
    <div className="counter_container">
    <button type="button" onClick={() => dispatch(decrement(1))}>
      <CiSquareMinus className="count_button"/>
    </button>

    <p className="count_value">{value}</p>
    <button type="button" onClick={() => dispatch(increment(1))}>
      <CiSquarePlus className="count_button"/>
    </button>
  </div>
  )
}

export default Count
