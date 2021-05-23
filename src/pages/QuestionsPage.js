import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { DivFlex, DivFlex1, P, TextQuestion } from '../components/Theme';



function QuestionsPage() {
    const [questoes, setQuestoes] = useState([])
    const [questionNumber, setQuestionNumber] = useState(0)
    const [questoesCorretas] = useState([])
    const [questoesIncorretas] = useState([])
    const [todasQuestoes] = useState([])
    const history = useHistory()

  
    const numeroQuestoes = localStorage.getItem('numeroQuestoes')

    const questoesTrocarPage = numeroQuestoes - 2

    const proxPergunta = (e) => {
        if (questionNumber > questoesTrocarPage) {
            history.push('/infos')
        }
        questoes && question()
        setQuestionNumber(questionNumber + 1)
    }
    useEffect(() => {
        question()
    }, [])


  
    const goToHomePage = () => {
       history.push('/')
    }


    const handleCheck = (e) => {
   
       
        if (e.valor === "correta") {
        
             questoesCorretas.push(e) 
        
          
        } else if (e.valor === "incorreta") {
           
            questoesIncorretas.push(e) 
        }
        
        todasQuestoes.push(e) 

        proxPergunta()
        const obj = {
            todas: todasQuestoes,
            corretas: questoesCorretas,
            incorretas: questoesIncorretas
        }

        const objJson = JSON.stringify(obj)

        localStorage.setItem('valores', objJson)


    }
   
    const question = () => {
        axios.get(`https://opentdb.com/api.php?amount=${numeroQuestoes}`)
            .then((res) => {
                setQuestoes(res.data.results[questionNumber])

            }).catch((e) => {
                console.log(e)
            })
    }


    const mapQuestoes = () => {
     
        if (questoes.type === "boolean") {
           
            return (
                <Box marginTop = '15px'>
                    <TextQuestion>Dificuldade: {questoes.difficulty}</TextQuestion>
                    
                        <P props = {'a'}>{questoes.question}</P>
                     <TextQuestion>Opções de Resposta</TextQuestion>
                    <p>{question}</p>
                    <DivFlex1>
                        <Button margin-top = '15px'  variant = 'outlined' color = 'primary'
                            onClick={() => handleCheck({ valor: 'correta', pergunta: questoes.question, suaResposta: questoes.correct_answer })}
                        >{questoes.correct_answer}</Button>

                        <Button variant = 'outlined' color = 'primary'
                            onClick={() => handleCheck({
                                valor: 'incorreta',
                                respostaCorreta: questoes.correct_answer,
                                suaResposta: questoes.incorrect_answers[0],
                                pergunta: questoes.question
                            })

                            }>
                            {questoes.incorrect_answers}
                        </Button>

                    </DivFlex1>

                </Box>
            )
        } else {
            return (
                <Box display = 'flex' flexDirection = 'column' justifyContent = 'center' alignItems ='center'
             
                >
                    <TextQuestion>Dificuldade: {questoes.difficulty}</TextQuestion>
                    <P>{questoes.question}</P>
                        <TextQuestion>Opções de Resposta</TextQuestion>
                    <p>{question}</p>
                    <DivFlex>
                        <Button variant = 'outlined' color = 'primary'
                            onClick={() => handleCheck({ valor: 'correta', pergunta: questoes.question, suaResposta: questoes.correct_answer })}>{questoes.correct_answer}</Button>


                        <Button variant = 'outlined' color = 'primary'
                        onClick={() => handleCheck({
                            valor: 'incorreta',
                            respostaCorreta: questoes.correct_answer,
                            suaResposta: questoes.incorrect_answers[0],
                            pergunta: questoes.question
                        })


                        }>{questoes.incorrect_answers && questoes.incorrect_answers[0]}</Button>


                        <Button variant = 'outlined' color = 'primary' onClick={() => handleCheck({
                            valor: 'incorreta',
                            respostaCorreta: questoes.correct_answer,
                            suaResposta: questoes.incorrect_answers[0],
                            pergunta: questoes.question
                        })

                        }>{questoes.incorrect_answers && questoes.incorrect_answers[1]}</Button>


                        <Button variant = 'outlined' color = 'primary'  onClick={() => handleCheck({
                            valor: 'incorreta',
                            respostaCorreta: questoes.correct_answer,
                            suaResposta: questoes.incorrect_answers[0],
                            pergunta: questoes.question
                        })

                        }>{questoes.incorrect_answers && questoes.incorrect_answers[2]}</Button>


                    </DivFlex>

                </Box>
            )
        }


    }



    return (
        <Box marginTop = '18px'>
             <Button variant="contained" color="primary"
            onClick = {goToHomePage}
            >
            Voltar a pagina inicial
             </Button>
            {mapQuestoes()}

        </Box>
    )
}
export default QuestionsPage