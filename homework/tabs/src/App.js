import './App.css';
import React, { useState } from 'react';
import TabTop from './components/TabTop';
    
    
function App() {
    const [message, setMessage ] = useState("");

    return (
        <div className="AllContainer">
            <h1>Tabs Assignment</h1>
            <div className="TabContainer">
                <TabTop id="1" className="tab" tabNum={1} message={ message } setMessage={ setMessage }/>
                <TabTop id="2" className="tab" tabNum={2} message={ message } setMessage={ setMessage }/>
                <TabTop id="3" className="tab" tabNum={3} message={ message } setMessage={ setMessage }/>
                <p> { message }</p>
            </div>
        </div>
    );
}

export default App;
