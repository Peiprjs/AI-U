import './App.css';
import GridMoving from './components/GridMoving';
import Controller from './components/Controller';
import MenuMotorbike from './components/MenuMotorbike';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { CardMedia,Modal,Typography,Box } from '@material-ui/core'; 
import Grid from '@material-ui/core/Grid';


import Bike from './img/yamaha.png'

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

  function checkResp(event){
    console.log(event)
  }

  const style = {
    Button :{
      margin:5
    }
  };

  return (
    <div className="App">
      <div className='GridGame'>
      <GridMoving pos={pos1}/>
      <GridMoving pos={pos2}/>
      <GridMoving pos={pos3}/>

      </div>
      <Grid container justifyContent="center">
      <div className='Controller'>
      <Grid item sx={12}>
        <img src={Bike} alt='' />
      </Grid>
      <Grid item xs={8} justifyContent="center">
      <Button style={style.Button} variant="contained" onClick={checkResp} key={1}>1</Button>
      <Button style={style.Button} variant="contained" onClick={checkResp} key={2}>2</Button>  
      <Button style={style.Button} variant="contained" onClick={checkResp} key={3}>3</Button>  
      <Button style={style.Button} variant="contained" onClick={checkResp} key={4}>4</Button>  
      </Grid>
      
      
      </div>

      </Grid>
      <div>
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
      
    </div>
  );
}

export default App;
