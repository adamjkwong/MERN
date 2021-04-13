import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import react, { useState } from  'react';


function App() {

  return (
    <div className="App">
      <div>
        <UserForm/>
      </div>
    </div>
  );
}

export default App;