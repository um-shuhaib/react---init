import './App.css'
import Register from './Register';
import Login from './Login';
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Student from './Student';
import Counter from './Counter';
import Products from './Products';

function App(){
  return(
    <>
      <Routes>
        <Route path='reg' element={<Register/>}/>
        <Route path='log' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='stud' element={<Student/>}/>
        <Route path='counter' element={<Counter/>}/>
        <Route path='product' element={<Products/>}/>
      </Routes>
    </>
  );
}

export default App

