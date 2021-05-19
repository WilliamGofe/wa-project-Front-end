import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';


const DivFlex = styled.div`
display:flex;
flex-direction:column;
`

function QuestionsPage() {
    const [questoes, setQuestoes] = useState([])
    const [questionNumber, serQuestionNumber] = useState(1)
    useEffect(() => {
        question()

    }, [])

    const question = () => {
        axios.get('https://opentdb.com/api.php?amount=2')
            .then((res) => {
               if(res.data.results[questionNumber]){
                return <p>Loading..</p>
               }
               setQuestoes(res.data.results[questionNumber])
        

            }).catch((e) => {
                console.log(e)
            })
    }


    


    const mapQuestoes = () => {
        if (questoes.type === "boolean") {
            return (
                <div>
                    <h3>Questão:</h3>
                    <p>{question}</p>
                  <DivFlex>
                         <label>{questoes.correct_answer}</label>
                    <Checkbox
                        value="correta"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                        
                    />
                     <label>{questoes.incorrect_answers}</label>
                    <Checkbox
                        value="incorreta"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    /> 
                  </DivFlex>
               
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Questão:</h3>
                    <p>{question}</p>
                  <DivFlex>
                       <label>{questoes.correct_answer}</label>
                    <Checkbox
                        value="correta"
                        inputProps={{ 'aria-label': 'Checkbox A' }}

                    />
                     <label>{questoes.incorrect_answers[0]}</label>
                    <Checkbox
                        value="incorreta"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    />
                     <label>{questoes.incorrect_answers[1]}</label>
                    <Checkbox
                        value="incorreta"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    />
                     <label>{questoes.incorrect_answers[2]}</label>
                    <Checkbox
                        value="incorreta"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    />
                  
                  
                  </DivFlex>
                  
                </div>
            )
        }


    }

    console.log(questoes)




    /* function shuffle(o) {
         for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
         return o;
       }
       
       var myArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      // console.info(shuffle(myArray));
     */



    return (
        <div>

            {mapQuestoes()}
        

        </div>
    )
}
export default QuestionsPage