import './App.css';
import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
    
    
function App() {
    const [boxColorArray, setBoxColorArray ] = useState([]);
  
    return (
        <div className="App">
            <h1>Standard Assignment</h1>
            <BoxForm boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
            <BoxDisplay boxColorArray={ boxColorArray } />
        </div>
    );
}
    
export default App;
  