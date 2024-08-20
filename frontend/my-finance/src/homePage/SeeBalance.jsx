import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import checker from './Home.jsx';

function SeeBalance() {
  const [balance, setBalance] = useState('');
  const [dailyBalance, setDailyBalance] = useState('');

  const navigate = useNavigate();

  checker();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchBalance = async (event) => {
      try {
        const response = await axios.get('http://localhost:8000/see_balance/');
        setBalance(response.data);
      }
      catch(error) {
        console.error("There is an error.", error);
      }
    };

    const fetchDailyBalance = async (event) => {
      try {
        const result = await axios.get("http://localhost:8000/per_day_balance/");
        setDailyBalance(result.data);
      }
      catch(error) {
        console.error("Something went wrong.", error);
      }
    };

    fetchBalance();
    fetchDailyBalance();
  }, {});


  return (
    <div className='container'>
      <h2 className='balance_header'>Balance</h2>
      <br />
      <p className='balance_content'>Your available balance is {balance} Rs.</p>
      <p className='daily_balance'>Your daily available balance is {dailyBalance} Rs.</p>
      <br />
      <button className='go_back' onClick={handleClick}>Go Back</button>
    </div>
  )
}
export default SeeBalance;
