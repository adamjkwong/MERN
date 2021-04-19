import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
    
    
function App() {
  const [currentColor, setCurrentColor] = useState("There are no colors");
  
  const passingColor = ( newColor ) => {
      setCurrentColor( newColor );
  }
  
    return (
        <>
            <BoxForm onNewColor={ passingColor } />
            <BoxDisplay color={ currentColor } />
        </>
    );
}
    
export default App;
  