import React from 'react';
import Home from './homePage/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import SeeBalance from './homePage/SeeBalance.jsx';
import Transaction from './homePage/Transaction.jsx';
import Deposite from './transactionPage/Deposite.jsx';
import Withdraw from './transactionPage/Withdraw.jsx';
// import Login from './loginPage/Login.jsx';


function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Login />} /> */}
      <Route path='/' element={<Home />} />
      <Route path='/see_balance' element={<SeeBalance />} />
      <Route path='/transaction' element={<Transaction />} />
      <Route path='/deposite' element={<Deposite />} />
      <Route path='/withdraw' element={<Withdraw />} />
    </Routes>
  );
}

export default App;
