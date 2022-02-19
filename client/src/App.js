import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail ] = useState('');
  const [userAge, setUserAge ] = useState('');
  const [regUsersList, setRegUsersList] = useState([])


  const submitUser = () => {
    Axios.post("http://localhost:1337/api/insert", {
      userName: userName, 
      userEmail: userEmail, 
      userAge: userAge,
    });
   
    setRegUsersList([
      ...regUsersList,
      { userName: userName, userEmail: userEmail, userAge: userAge },
    ]);
  }; 

  useEffect(() => {
    Axios.get("http://localhost:1337/api/get").then((response) => {
      setRegUsersList(response.data);
    });
  }, []);

  const deleteUser = (name) => {
    Axios.delete(`http://localhost:1337/api/delete/${name}`)
  }

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
      </div>

      <button onClick={submitUser}>Submit</button>

      {regUsersList.map((val) => {
        return (
          <div className='List'>
            <h1>List of registered participants</h1>
            <h3> Name: {val.userName}</h3> 
            <h3> Email:{val.userEmail}</h3>  
            <h3> Age:{val.userAge}</h3>

            <button onClick={() => {deleteUser(val.userName)}}>Delete</button>
            <input type="text" id="updateInput" />
            <button>Update</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
