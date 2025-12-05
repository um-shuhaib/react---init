import './App.css'
import Register from './Register';
import Login from './Login';
import {Routes,Route} from 'react-router-dom'
import Home from './Home';

function App(){
  return(
    <>
      <Routes>
        <Route path='reg' element={<Register/>}/>
        <Route path='log' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App

