import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './signin';
import SignUp from './signup';

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/signin' element={<SignIn/>} ></Route>
    <Route path='/signup' element={<SignUp/>} ></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
