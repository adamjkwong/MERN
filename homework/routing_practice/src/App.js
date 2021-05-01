
import './App.css';
import HomeComponent from './components/HomeComponent';
import StringComponent from './components/StringComponent';
import React, {useState, useEffect} from 'react';
import { Router } from "@reach/router";

function App() {
  return(
    <div className="App">
        <Router>
            <HomeComponent path="/home" />
            <StringComponent path="/:input/" />
            <StringComponent path="/:input/:fontColor/:backColor" />
        </Router>
    </div>
)
}


export default App;


//   1. localhost:3000/home: This should display the home page, with a generic "Welcome" heading

// 2. localhost:3000/4: This should display the number "4", or any other number that was sent through

// 3. localhost:3000/hello: This should display the word "hello" or any other word that was sent through

// 4. localhost:3000/hello/blue/red: This should display the word "hello" in blue text with a red background. It should work with any other valid word and colors.
