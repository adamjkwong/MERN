import './App.css';
import React, { useState } from 'react';
import TabTop from './components/TabTop';
    
    
function App() {
    const [message, setMessage ] = useState([]);
  
    return (
        <div className="App">
            <h1>Tabs Assignment</h1>
            <TabTop>
        </div>
    );
}

export default App;
