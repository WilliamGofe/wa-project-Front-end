import React from 'react'
import {Box} from '@material-ui/core';
import Text from './Text';

function HeaderHome(p) {
    return (
        <header>
          <Box display = 'flex' justifyContent ='center' alignItems = 'center'
          justifyContent = 'center'
          
          >
            <h1>Conhecimentos Gerais</h1>
            <img src = 'https://cdn2.iconfinder.com/data/icons/knowledge-education-outline/512/N_F009_09_TalkingArtboard_1_copy_6-128.png'></img>
          </Box>
               
           <Text/>

    </header>  
    )
}
    export default HeaderHome