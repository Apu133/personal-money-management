import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = async (event) => {
        setUsername('');
        setPassword('');
    };

    const navigate = useNavigate();

    const handleClick = async (event) => {
        navigate('/home');
    };

    const isLogin = 0;


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // const result = await axios.get('http://localhost:8000/login/', {username, password});
            // result = parseInt(result);
            const userresult = username.localeCompare("apu");
            const passwordresult = password.localeCompare("2809");
            if (userresult == 0 && passwordresult == 0) {
                toast.success("Login successful.");
                handleClick();
                isLogin = 1;
                resetForm();
            }
            else {
                toast.error("Incorrect username or password.");
                resetForm();
            }
        }
        catch(error) {
            console.error("Data mismatched.");
            toast.error("Something is wrong.");
            resetForm();
        }
    }

  return (
    <div className='container'>
        <h2 className='headline'>LogIn</h2>
        <form className='field' onSubmit={handleSubmit}>
        <br />
        <label>Username:</label>
        <input type='text' placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type='password' placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <button className='ok' type='submit'>Submit</button>
        <br />
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login