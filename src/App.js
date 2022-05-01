import './App.css';
import GridMoving from './components/GridMoving';

import MenuMotorbike from './components/MenuMotorbike';
import Api from './Api';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { CardMedia,Modal,Typography,Box } from '@material-ui/core'; 
import Grid from '@material-ui/core/Grid';

import Bike1 from './img/bmw.png'
import Bike2 from './img/custom.png'
import Bike3 from './img/peugeot.png'
import Bike4 from './img/suzuki.png'
import Bike5 from './img/yamaha.png'

import Img1 from './img/1.png'
import Img2 from './img/2.png'
import Img3 from './img/3.png'
import Img4 from './img/4.png'
import Img5 from './img/5.png'
import Img6 from './img/6.png'
import Img7 from './img/7.png'
import Img8 from './img/8.png'
import Img9 from './img/9.png'

let q1 = {"words":["TV","Washing Machine","Chair","Desk"],"correct":"TV","img":Img1}
let q2 = {"words":["Bed","TV","Stuffed animal","Sofa"],"correct":"Sofa","img":Img2}
let q3 = {"words":["Bird cage","Computer","Sofa","TV"],"correct":"Bird cage","img":Img3}
let q4 = {"words":["Picture","Monkey","Chair","Table"],"correct":"Monkey","img":Img4}
let q5 = {"words":["Oven","Washing Machine","Dishwasher","Sink"],"correct":"Oven","img":Img5}
let q6 = {"words":["Board","Desk","Mirror","Cupboard"],"correct":"Mirror","img":Img6}
let q7 = {"words":["Sofa","TV","Table","Dinnerware"],"correct":"Table","img":Img7}
let q8 = {"words":["Sofa","Dishwasher","Computer","Desk"],"correct":"Computer","img":Img8}
let q9 = {"words":["Stool","Sofa","Blender","Sink"],"correct":"Stool","img":Img9}

const questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9]

function App() {

  const right = 1
  const n_bike = 4
  const n_questions = 7
  
  const rand = () => Math.floor(Math.random() * n_bike)
  const rand_q = () => Math.floor(Math.random() * n_questions)
  
  
  const [end,setEnd] = useState(false)
  const [pos1,setPos1] = useState(0)
  const [pos2,setPos2] = useState(0)
  const [pos3,setPos3] = useState(0)
  const [pos4,setPos4] = useState(0)

  const [question,setQuestion] = useState(questions[rand_q()])


  const [bike,setBike] = useState(0)
  function setbikechild(bike){
    setBike(bike)
  }
  const motorbike = [Bike1,Bike2,Bike3,Bike4,Bike5]
  const [b2,setb2] = useState(rand())
  const [b3,setb3] = useState(rand())
  const [b4,setb4] = useState(rand())

  const [open,setOpen] = useState(false)

  const handleClose = function(){
    setOpen(false)
  }

  const handleOpen = function(){
    setOpen(true)
  }
  function esit(){
    return (pos1 >= pos2 && pos1 >= pos3 && pos1 >= pos4)

  }
  function checkResp(event){
    if(!end){
      
      let user_resp = event.currentTarget.dataset.id
      const p2 = Math.round(Math.random())
      const p3 = Math.round(Math.random())
      const p4 = Math.round(Math.random())

      
      if(user_resp == question.correct){
        setPos1(pos1 + 1)
      }else{
        if(pos1 != 0){
          setPos1(pos1 - 1)
        }
      }

      setQuestion(questions[rand_q()])

      setPos2(pos2 + p2)
      setPos3(pos3 + p3)
      setPos4(pos4 + p4)
      if(pos1 >= 11 || pos2 >= 11 || pos2 >= 11 || pos2 >= 11){
        // the game is finished
        setEnd(true)
        
        const win = esit()

        if(win){
          alert("Game finished, you win :D")
        }else{
          alert("Game finished, you lose :/")
        }

        setPos1(0)
        setPos2(0)
        setPos3(0)
        setPos4(0)

        setb2(rand())
        setb3(rand())
        setb4(rand())

        const play_again = window.confirm("Do you want to play again ?")
        if(play_again){
          setEnd(false)
        }
      }
    }
  }

  const style = {
    Button :{
      margin:5
    },
    Box :{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      width: "100%",
      height: "100%",
    }
  };
  
  return (
    <div className="App">
      <div className='GridGame'>
      <GridMoving pos={pos1} bike={motorbike[bike]}/>
      <GridMoving pos={pos2} bike={motorbike[b2]}/>
      <GridMoving pos={pos3} bike={motorbike[b3]}/>
      <GridMoving pos={pos3} bike={motorbike[b4]}/>

      </div>
      <Grid container justifyContent="center">
      <div className='Controller'>
      <Grid item sx={12}>
        <img src={question.img} alt='' />
      </Grid>
      <Grid item xs={8} >
        <Button style={style.Button} variant="contained" onClick={checkResp} data-id={question.words[0]}>{question.words[0]}</Button>
        <Button style={style.Button} variant="contained" onClick={checkResp} data-id={question.words[1]}>{question.words[1]}</Button>  
        <Button style={style.Button} variant="contained" onClick={checkResp} data-id={question.words[2]}>{question.words[2]}</Button>  
        <Button style={style.Button} variant="contained" onClick={checkResp} data-id={question.words[3]}>{question.words[3]}</Button>  
      </Grid>
      
      
      </div>

      </Grid>
      <div>
      <Button variant="contained" onClick={handleOpen}>Change motorbike!!</Button>
      <Modal open={open}  onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style.Box}>
          
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose your motorbike !!
          </Typography>        
          
          <MenuMotorbike setbikechild={setbikechild}/>
        </Box>
      </Modal>
      </div>
        
    </div>
    
  );
}

export default App;
