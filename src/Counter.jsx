import React from 'react'
import { useState } from 'react'

function Counter() {

// const [statename,setstateaction] = useState(default) 
    const [counter,setCounter] = useState(0)

    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(counter-1)
    }
    function reset(){
        setCounter(0)
    }
    
    return (
    <div className='d-flex flex-column mt-5 justify-content-center align-items-center'>
        <h2>Counter</h2>
        <h1>{counter}</h1>
        <div className='p-5'>
        <button className='btn btn-outline-success m-2' onClick={increment}>increment</button>
        <button className='btn btn-outline-warning m-2' onClick={decrement}>decrement</button>
        <button className='btn btn-outline-danger m-2' onClick={reset}>reset</button>
        </div>
    </div>
  )
}

export default Counter