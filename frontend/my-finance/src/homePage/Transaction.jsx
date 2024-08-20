import React from 'react';
import '../style/transaction.css';
import { useNavigate } from 'react-router-dom';
import checker from './Home.jsx';


function Transaction() {

    const navigate = useNavigate();

    checker();

    const handleClick = () => {
        navigate('/deposite');
    };

    const handleClick1 = () => {
        navigate('/withdraw');
    };

    const handleClick2 = () => {
        navigate('/');
    };

  return (
    <div className='container'>
        <h2 className='transaction_header'>Transaction</h2>
        <div className='main_transaction'>
            <button className='deposite' onClick={handleClick}>Deposite</button>
            <br />
            <button className='withdraw' onClick={handleClick1}>Withdraw</button>
            <br />
            <br />
            <button className='go_back' onClick={handleClick2}>Go Back</button>
        </div>
    </div>
  )
}
export default Transaction;
