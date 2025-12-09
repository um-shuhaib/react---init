import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Home() {

    const [numbers,setNumbers] = useState({num1:"",num2:""})

    function findsum(){
        console.log(Number(numbers.num1)+Number(numbers.num2));
        
        
    }
    console.log(numbers);
    

  return (
    <>
    <input type="text" placeholder='num1' onChange={(e)=>(setNumbers({...numbers,num1:e.target.value}))} />
    <input type="text" placeholder='num2' onChange={(e)=>(setNumbers({...numbers,num2:e.target.value}))} />
    <button className='btn btn-success' onClick={findsum}>Sum</button>
    </>

  )
}

export default Home