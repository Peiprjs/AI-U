import './App.css';
import GridMoving from './components/GridMoving';
import React, { useState } from 'react';

function App() {

  const [pos1,setPos1] = useState(0)
  const [pos2,setPos2] = useState(0)
  const [pos3,setPos3] = useState(0)

  return (
    <div className="App">
      <GridMoving pos={pos1}/>
      <GridMoving pos={pos2}/>
      <GridMoving pos={pos3}/>
    </div>
  );
}

export default App;
