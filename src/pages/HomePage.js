import React, { useEffect } from 'react'
import { Box ,Button, Input } from '@material-ui/core';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router';

function HomePage() {
    const history = useHistory()

  const goDecisionPage = () => {
    history.push('/decision')
  }
    return(
        <div>
           <h1>Conhecimentos Gerais</h1>
           <h2>Neste teste você demonstrará que é capaz de respondes algumas perguntas sobre variados assuntos. Está preparado ? 
           </h2>
          
          <Input 
          placeholder = "Digite aqui "
          
          ></Input>
            <p>Para iniciarmos, você deve nos informar a quantidade de perguntas que está disposta a responder</p>
            <Button variant="contained" color="primary"
            onClick = {goDecisionPage}
            >
            Vamos as questões!
             </Button>
         
        </div>
    )
}
export default HomePage