import React from 'react'

function Login() {
  return (
    <>
    <form action="">
        <div className='d-flex flex-column justify-content-center align-items-center bg-dark'>
    <h1 style={{color:"gold"}}>Login form</h1>
        <input type="text" className='form-control mt-2 w-75' placeholder='username'/>
        <input type="text" className='form-control mt-2 w-75' placeholder='email'/>
        <input type="text" className='form-control my-2 w-75' placeholder='password'/>
        <input type="submit" className='btn btn-success my-3' name="" id="" />
        </div>
    </form>
    </>
  )
}

export default Login