import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserDisplay from './components/UserDisplay';
import react, { useState } from  'react';


function App() {
  const [first_name, setFirstName] = useState("");
  return (
    <div className="App">
      <div>
        <UserForm first_name = {first_name} setFirstName = {setFirstName} />
        <UserDisplay first_name = {first_name} />
      </div>
    </div>
  );
}

export default App;