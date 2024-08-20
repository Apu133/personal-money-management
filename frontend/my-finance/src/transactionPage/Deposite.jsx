import React from 'react';
import '../style/withdraw.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import checker from '../homePage/Home.jsx';

function Deposite() {

  const navigate = useNavigate();

  checker();

  const handleClick2 = () => {
    navigate('/transaction');
  };

  const [serial, setSerial] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [plus_negative] = useState('plus');

  useEffect(() => {
    const fetchSerial = async (event) => {
      try {
        const response = await axios.get('http://localhost:8000/get_serial/');
        setSerial(parseInt(response.data));
      }
      catch(error) {
        console.error("There is an error.", error);
      }
    };

    fetchSerial();
  }, {});


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/create/', {serial, amount, description, plus_negative});
      console.log('Item created with ID: ', response.id);
      toast.success("Item created successfully.");
      resetForm();
    }
    catch (error) {
      console.error('There was an error creating the item!', error);
      toast.error("Item creation failed.");
    }
  };

  const resetForm = () => {
    setSerial('');
    setAmount('');
    setDescription('');
  };

  return (
    <div className='container'>
      <h2 className='heading'>Deposite</h2>
      <form className='field' onSubmit={handleSubmit}>
        <br />
        <label>Serial Number:</label>
        <input type='text' placeholder='Serial number' value={serial} onChange={(e) => setSerial(e.target.value)} />
        <br />
        <label>Amount:</label>
        <input type='number' placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
        <br />
        <label>Description:</label>
        <input type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <button className='ok' type='submit'>Submit</button>
        <br />
        <br />
        <button className='back' onClick={handleClick2}>Go Back</button>
      </form>
      <ToastContainer />
    </div>
  )
}
export default Deposite;
