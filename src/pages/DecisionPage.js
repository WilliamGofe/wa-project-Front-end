import React from 'react'
import { Box ,Button, ButtonBase, ButtonGroup, Input } from '@material-ui/core';
import { useHistory } from 'react-router';

function DecisionPage() {
const history = useHistory()

    const backPage = () => {
        history.goBack('/')
    }
    const goQuestionsPage = () => {
        history.push("/questions")
    }

    return(
    <div>
  <Button onClick = {goQuestionsPage} 
  variant="contained" 
  color="primary">
      Start
  </Button>
  <Button 
  variant="contained" 
  color="primary"
  onClick = {backPage}
  >
      Cancel   
      </Button>
    </div>
        
      
    )
}
export default DecisionPage