import React, { useState } from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const Login = () => {

  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const login=()=>{
    const data={email,  password}
    if(email&&password)
    {
    axios.post('http://localhost:4000/log',data)
    .then((response)=>{
      if(response.data.status==200)
      {
        navigate('/')
      }else{
        alert(response.data.message)
      }
      })
    }
    
  }

  return (
    <div id={style.container}>
      <section className={style.sec1}>
        <div className={style.login}>
          <h3 className={style.h} >Student Profile</h3>
        </div>

        <div className={style.email_pass}>
          <div className={style.part1}>
            <input type="email" placeholder="Enter your email" onChange={e=>setEmail(e.target.value)} autoFocus />
            <input type="password" placeholder="Enter your password" onChange={e=>setPassword(e.target.value)} />
            <button onClick={login}>LOGIN</button>
          </div>
        </div>

        <div className={style.part3}>
          <p>Not Registered?</p><Link to="/signup">Add Student Profile</Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
