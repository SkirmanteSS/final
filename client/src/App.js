import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Register aplication</h1>

      <div className='form'>
      <label>User name</label>
      <input type='text' name='name' />
      <label>User email</label>
      <input type='text' name='email' />
      <label>User age</label>
      <input type='text' name='age' />
      

      <button> New User</button>
      </div>
    </div>
  );
}

export default App;
