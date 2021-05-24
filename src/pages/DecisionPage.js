import React from 'react'
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';


function DecisionPage(props) {
    const history = useHistory()

    const backPage = () => {
        history.goBack('/')
    }
    const goQuestionsPage = () => {
        localStorage.removeItem('valores')
        history.push("/questions")
    }

    return (

        <Box display = 'flex'
        width = '800px'
        margin = 'auto'
        marginTop = '350px'
        height = '200px'
        justifyContent = 'space-evenly'
        alignItems = 'center'
        >
            <Box>
                <Button size = 'large'
                    fullWidth = '20px'
                    onClick={goQuestionsPage}
                    variant="contained"
                    color="primary">
                    Start
  </Button>
            </Box>

            <Box>

                <Button
                    size = 'Large'
                    
                    variant="contained"
                    color="secondary"
                    onClick={backPage}
                >
                    Cancel
    </Button>
            </Box>


        </Box>




    )
}
export default DecisionPage