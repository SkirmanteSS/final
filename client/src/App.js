import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

 

function App() {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail ] = useState('');
  const [userAge, setUserAge ] = useState('');
  const [regUsersList, setRegUsersList] = useState([]);

  const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:1337/api/get").then((response) => {
      setRegUsersList(response.data);
    });
  }, []);

  const submitUser = () => {
    Axios.post("http://localhost:1337/api/insert", {
      userName: userName, 
      userEmail: userEmail, 
      userAge: userAge,
    }).then (() => {
      alert("Successful insert");
    });
   
    setRegUsersList([
      ...regUsersList,
      { userName: userName, userEmail: userEmail, userAge: userAge },
    ]);
  }; 

  const deleteUser = (userName) => {
    Axios.delete(`http://localhost:1337/api/delete/${userName}`);
  };

  const updateUser = (userName) => {
    Axios.put("http://localhost:1337/api/update", {
      userName: newUserName, 
      userEmail: userEmail, 
      userAge: userAge,
    });
    setNewUserName('')
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
        }} 
        />
      </div>
      
        <button onClick={submitUser}>Submit</button>

        
      {regUsersList.map((val) => {
        return ( 
          <div className='table'>
            <h1>New User Name: {val.userName} </h1>| 
            <h1>User Email: {val.userEmail} | User Age: {val.userAge}</h1>
            <button onClick={() => {deleteUser(val.userName)}}> Delete </button>
            <input type='text' id='updateInput' onChange={(e)=>
              setNewUserName(e.target.value)
             }/>
            <button onClick={()=> {updateUser(val.userName)}}> Update </button> 
          </div>
        );
      })}  
      
    </div>
  );
};

export default App;
