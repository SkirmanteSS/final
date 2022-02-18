import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail ] = useState('');
  const [userAge, setUserAge ] = useState('');
  const [regUsersList, setRegUsersList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:1337/api/get").then((response) => {
      setRegUsersList(response.data)
    });
  }, []);

  const submitUser = () => {
    Axios.post("http://localhost:1337/api/insert", {
      userName: userName, 
      userEmail: userEmail, 
      userAge: userAge
    }).then(() => {
      alert("Successful insert");
    })
  }; 

  return (
    <div className="App">
      <h1>Register aplication</h1>

      <div className='form'>
      <label>User name</label>
      <input type='text' name='name' onChange = {(e)=> {
        setUserName(e.target.value)
      }} />
      <label>User email</label>
      <input type='text' name='email' onChange = {(e)=> {
        setUserEmail(e.target.value)
      }} />
      <label>User age</label>
      <input type='text' name='age' onChange = {(e)=> {
        setUserAge(e.target.value)
      }} />
      

      <button onClick = {submitUser}> Submit </button>

      {regUsersList.map((val) => {
        return <h1> After registering: {val.userName} | {val.userEmail} | {val.userAge}</h1>
      })}
      </div>
    </div>
  );
}

export default App;
