import styled from '@emotion/styled';
import { AppBar,Toolbar, Typography } from '@mui/material'

import React from 'react'

const Footer = () => {


  return (
    <div>
  
        
        <AppBar  position='fixed' sx={{top:'auto',bottom:0}}>

            <Toolbar>
                <Typography sx={{flexGrow:3}}>Copyright ©  2023 All rights Reserved ®</Typography>
            </Toolbar>
    
        </AppBar>
      
        <Toolbar/>
      
</div>
  )
}

export default Footer