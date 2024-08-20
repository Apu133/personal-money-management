import React from 'react';
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';
import isLogin from '../loginPage/Login.jsx';

function Home() {
    const navigate = useNavigate();

    const checker = async (event) => {
        if (isLogin == 0) {
            navigate('/');
        }
    }

    checker();

    const handleClick = () => {
        navigate('/see_balance');
    }
    const handleclick1 = () => {
        navigate('/transaction');
    }
  return (
    <div className='container'>
        <div className='content'>
            <h2 className='welcome'>Welcome Apu</h2>
            <h2 className='happy_saving'>Happy Saving!</h2>
            <div className='main_buttons'>
                <button className='see_balance' onClick={handleClick}>See Balance</button>
                <br />
                <button className='transaction' onClick={handleclick1}>Transaction</button>
            </div>
            
        </div>
    </div>
  )
}
export default Home;
