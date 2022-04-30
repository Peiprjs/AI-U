import './App.css';
import GridMoving from './components/GridMoving';
import Controller from './components/Controller';
import MenuMotorbike from './components/MenuMotorbike';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { CardMedia,Modal,Typography,Box } from '@material-ui/core'; 

function App() {

  const [pos1,setPos1] = useState(0)
  const [pos2,setPos2] = useState(0)
  const [pos3,setPos3] = useState(0)

  const [open,setOpen] = useState(false)

  const handleClose = function(){
    setOpen(false)
  }

  const handleOpen = function(){
    setOpen(true)
  }

  function goRight(){
    if(pos1 == 12){
      setPos1(12)
      return
    }
    setPos1(pos1 + 1)
  }

  function goLeft(){
    if(pos1 == 0){
      setPos1(0)
      return
    }
   
    setPos1(pos1 - 1)
  }

  return (
    <div className="App">
      <div className='GridGame'>
      <GridMoving pos={pos1}/>
      <GridMoving pos={pos2}/>
      <GridMoving pos={pos3}/>

      </div>
      <div className='Controller'>
      <CardMedia/>
      <Button variant="contained" onClick={goLeft}>left</Button>
      <Button variant="contained" onClick={goRight}>right</Button>
      </div>

      <Button variant="contained" onClick={handleOpen}>Change motorbike!!</Button>
      <Modal open={open}  onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box>
          
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose your motorbike !!
          </Typography>
          
            
          
          <MenuMotorbike/>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
