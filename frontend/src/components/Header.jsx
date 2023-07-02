import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const Header = () => {
 const propsToPassInd ={cuisine:'ind'}
 const propsToPassAme ={cuisine:'ame'}
 
 
  return (
  
    <AppBar>
        <Toolbar>
        <DinnerDiningIcon/> <Link to={'/'}  style={{textDecoration:'none',color:'white'}}><Typography   >Bharath's Recipe App</Typography></Link>
        <Box  align='right' sx={{flexGrow:3}}>
        
        <Button><Link to={'/indiancuisine'} state={propsToPassInd}  style={{textDecoration:'none',color:'white'}} >Indian</Link>
        </Button>
        
        <Button><Link to={'/italiancuisine'} state={propsToPassInd}  style={{textDecoration:'none',color:'white'}} >Italian</Link>
        </Button>
        <Button><Link to={'/americancuisine'}    state={propsToPassAme} style={{textDecoration:'none',color:'white'}} >American</Link>
        </Button>
        <Button><Link to={'/chinesecuisine'}    state={propsToPassAme} style={{textDecoration:'none',color:'white'}} >Chinese</Link>
        </Button>
 
        <Button><Link to={'/addcuisine'}  style={{textDecoration:'none',color:'white'}}>AddCuisine</Link></Button>
        </Box>
      
        </Toolbar>
    </AppBar>
  
  )
}

export default Header