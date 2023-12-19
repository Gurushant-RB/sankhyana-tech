import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style1 from "./signup.module.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [name, setName]=useState('');
  const [mobile, setLast]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const navigate=useNavigate();
  
  const register=(e)=>
  {
    e.preventDefault();
    const data={name, mobile, email, password}
    console.log(name, mobile, email, password);
    if(name&&mobile&&email&&password)
    {
      axios.post('http://localhost:4000/reg', data)
      .then((resp)=>
      {
        alert(resp.data.message);
        navigate('/log');
      })
    }
    else
    {
      alert('invalid credentials');
    }
  }
  return (
    <div id={style1.container}>
      <section className={style1.sec1}>
        <div className={style1.login}>
          <h3 className={style1.h3}>Add Student Profile</h3>
        </div>
        <div className={style1.email_pass}>
          <form className={style1.part1}>
            <input type="text" placeholder="Enter name" onChange={e=>setName(e.target.value)} autoFocus />
            <input type="text" placeholder="Enter mobile number" onChange={e=>setLast(e.target.value)} />
            <input type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter password" onChange={e=>setPassword(e.target.value)}/>
            <button className={style1.button} onClick={register}>REGISTER</button>
          </form>
        </div>
        <div className={style1.part3}>
          <p>Already Registered?</p> <Link to="/log">Check Student Profile</Link>
        </div>
      </section>
    </div>
  );
};
export default Signup;
