import React, { useEffect, useState } from 'react'
import {Box ,Button, Input } from '@material-ui/core';
import { Router, useHistory } from 'react-router';
import { DivQuestion_correct, DivQuestion_incorrect, TextInput } from '../components/Theme';


function HomePage() {
  const [inputValue, setInputValue] = useState()
  let numeroQuestoes = window.localStorage.getItem('numeroQuestoes')
  const history = useHistory()
 


  const goDecisionPage = () => {   
    if(numeroQuestoes =! undefined){
      localStorage.removeItem('numeroQuestoes')
      localStorage.setItem('numeroQuestoes', inputValue)
    }else{localStorage.setItem('numeroQuestoes', inputValue)}
     if (inputValue === undefined ){
      alert("Digite a quantidade de perguntas que vôce deseja")
    }else if (inputValue < 0){
      alert("Digite um numero válido")
    }
    else{
      history.push('/decision') 
    }
    
  }

  let infos = window.localStorage.getItem('valores')


  const goToInfos = () => {
    history.push('/infos')
  }

const handleInput = (event) => {
      setInputValue(event.target.value)   
      console.log(event.key)
      if(event.key === 'Enter'){
        goDecisionPage()
      }
  }

 console.log(inputValue)

 const renderOldQuestions = () => {
    if(infos != undefined){
      return (
        <DivQuestion_correct onClick = {goToInfos}>
          <h4>Visite seu ultimo teste clicando aqui 🧾</h4>
          <p> ✔️ Disponivel</p> 
        </DivQuestion_correct>
      )
    }else{
      return (
        <DivQuestion_incorrect>
          <p> ❌ Questionário Indisponivel</p> 
        </DivQuestion_incorrect>
      )
    }
 } 
 
    return(
        <Box display = 'flex' flexDirection = 'column' width = '900px'
        alignItems = 'center' marginLeft = '500px' marginTop = '80px'
        justifyContent = 'center'
          
        >
          <Box display = 'flex' justifyContent ='center' alignItems = 'center'
          justifyContent = 'center'
          
          >
            <h1>Conhecimentos Gerais</h1>
            <img src = 'https://cdn2.iconfinder.com/data/icons/knowledge-education-outline/512/N_F009_09_TalkingArtboard_1_copy_6-128.png'></img>
          </Box>
           
           <h2>Neste teste você demonstrará que é capaz de respondes algumas perguntas sobre assuntos variados. Está preparado ? 
           </h2>
        <div>
               <Input 
          placeholder = "Digite aqui "
          onChange = {handleInput}
          onKeyUp = {handleInput}
          value = {inputValue}
          type = "number"
          ></Input>

            <TextInput>Para iniciarmos, você deve nos informar a quantidade de perguntas que está disposto(a) a responder</TextInput>
        </div>

            <Button variant="contained" color="primary"
            onClick = {goDecisionPage}
            >
            Vamos as questões!
             </Button >
         {renderOldQuestions()}
        
        </Box>
    )
}
export default HomePage