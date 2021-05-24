import { Button,Box } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const H2 = styled.h2`

`
const Number = styled.p `
font-size: larger;
font-style: oblique;
`
const Perguntas = styled.h4`
font-style: italic;
`

const Respostas = styled.p`
font-size: 18px;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`


function InfosPage() {
 
    const infos = window.localStorage.getItem('valores')
    const infosJson = JSON.parse(infos)
    
    const incorretas = infosJson.incorretas
    const corretas = infosJson.corretas   
    const history = useHistory()
    const goToHomePage = () => {
        history.push('/')
    }

    const mapIncorretas = incorretas.map((question)=>{
        return(
            <div>
                <Perguntas>{question.pergunta}</Perguntas>

                <Respostas>✔️ Resposta correta: {question.respostaCorreta}</Respostas>
                <Respostas>❌ Sua resposta: {question.suaResposta}</Respostas>
            </div>
        )
    })
    const mapCorretas = corretas.map((question)=>{
        return(
            <div>
                <Perguntas>{question.pergunta}</Perguntas>

                <Respostas>✔️Resposta: {question.suaResposta}</Respostas>
            </div>
        )
    })
    console.log(corretas)
    return(
        <Box marginTop = '18px'>
          <Button variant="contained" color="primary"
            onClick = {goToHomePage}
            >
            Voltar a pagina inicial
             </Button>

        <Box>
          <h2>Total de questões</h2>
          <Number>
         {infosJson.todas&&infosJson.todas.length}  
        </Number>
         
        </Box>

        <Box display= 'flex' justifyContent = 'space-around'
        alignItems = 'center'
        paddingTop = '32px'
       
        >
            
           <Box border = 'solid 2px red'
           borderRadius = '18px' padding = '10px'>
        <H2>Erros:</H2> 
        <Number>
        {infosJson.incorretas&&infosJson.incorretas.length}
        </Number>  
         
            {mapIncorretas}
          </Box>
          <Box border = 'solid 2px green'
           borderRadius = '18px' padding = '10px'>
            <H2>Acertos:</H2> 
        <Number>
        {infosJson.corretas&&infosJson.corretas.length}
        </Number>
          

          {mapCorretas}
          </Box>  
        </Box>
         
  
        </Box>
        
    )
}
export default InfosPage