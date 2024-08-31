import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {auth} from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp(){

 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');

 const handleSubmit = async (e)=>{
   e.preventDefault();
   try {
     await createUserWithEmailAndPassword(auth,email,password);
      console.log("Account Created")
   } catch (error) {
      console.log(error);
   }
 }

 
    return(
   <form className="page2">
      <h1>Sign In form</h1>
      <div className="content">
         <div className="h2">Name</div>
         <input type="text"  onChange={(e)=> setEmail(e.target.value)} />
         <div className="h2">Password</div>
         <input type="password" onChange={(e)=> setPassword(e.target.value)} />
         <div className="addButton" onClick={handleSubmit} >add</div>
         <Link to="./signin" >go to sign in</Link>
      </div>
   </form>
);
}
