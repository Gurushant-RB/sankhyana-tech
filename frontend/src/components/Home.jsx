import React from 'react';
import { Link } from 'react-router-dom';
import style from './home.module.css'

const Home = () => {
  return (
    <div className={style.container}>
      <h1>Welcome To Admin Page</h1>
      <Link to='/signup'>ADD STUDENT</Link>
    </div>
  );
}

export default Home;
