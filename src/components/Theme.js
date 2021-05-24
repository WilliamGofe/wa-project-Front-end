import React from 'react'
import styled from 'styled-components'

export const DivQuestion_correct = styled.div`
cursor:pointer;
width: 40%;
margin-top: 32px;
height: 300px;
display: flex;
flex-direction:column;
justify-content: center;
border-radius: 18px;
border:solid 2px;
border-color: green;
`
export const DivQuestion_incorrect = styled.div`
cursor:pointer;
width: 40%;
margin-top: 32px;
height: 300px;
display: flex;
flex-direction:column;
justify-content: center;
border-radius: 18px;
border:solid 2px;
border-color: red;
`
export const TextInput = styled.p`
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 18px;
font-variant: small-caps;
`
 export const DivFlex = styled.div`
display:flex;
flex-direction:column;
height: 50vh;
width: 600px;
justify-content:space-around;
margin-top: -50px;
`
 export const DivFlex1 = styled.div`
display:flex;
flex-direction:column;
height: 50vh;
width: 600px;
justify-content:space-around;
margin-top: -50px;
margin-left: 660px;
`
 export const P = styled.p`
font-size: 20px;
`

 export const TextQuestion = styled.h3`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size:30px;
color:#333;
`
export const H2 = styled.h2`
`
export const Number = styled.p `
font-size: larger;
font-style: oblique;
`
export const Perguntas = styled.h4`
font-style: italic;
`

export const Respostas = styled.p`
font-size: 18px;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`