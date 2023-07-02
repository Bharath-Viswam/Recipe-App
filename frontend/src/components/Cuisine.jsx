import { Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PeopleIcon from '@mui/icons-material/People';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCuisine from './AddCuisine';
import { useLocation } from 'react-router-dom';
const Cuisine = (props) => {
    const[data,setData] = useState([])
    const[singleValue,setSingleValue] = useState([])
    const[update,setUpdate] =useState(false)

    useEffect(()=>{
        

            axios.get("http://localhost:3001/recipes")
            .then((res)=>{
                setData(res.data)
            })
        }

    ,[])
    const deleteValues = (title)=>{
        axios.delete("http://localhost:3001/deleterecipe/" + title)
        .then((res)=>{
            alert('deleted')
            window.location.reload(false)
        })
    }
    const updateValues =(val)=>{
        console.log("update clicked")
        setUpdate(true)
        setSingleValue(val)
    }
    var finalJsx =  <div style={{paddingTop:'110px'}}>
    <Grid container spacing={2}>
            {data.map((val,i)=>{
                return(
                 
                            <Grid item xs={3}>
                            <img style={{width:'200px',height:'200px'}} src={val.image} alt={val.title}></img>
                         <Typography >{val.title}</Typography>
                         <Typography component='span'><AccessTimeFilledIcon></AccessTimeFilledIcon>{val.duration}</Typography>
                         &nbsp;&nbsp;
                         <Typography component='span'><PeopleIcon></PeopleIcon>{val.servings}</Typography>
                         <Typography></Typography>
                         <Button variant='contained' onClick={()=>updateValues(val)}>Update <EditIcon></EditIcon></Button>
                         &nbsp;
                         <Button variant='contained' onClick={()=>deleteValues(val.title)}>Delete <DeleteIcon></DeleteIcon></Button>
                            </Grid>
                  
                   
                )
            })}
        </Grid>
    </div>

    if(update) finalJsx = <AddCuisine data={singleValue} method='put'></AddCuisine>
  return (
  finalJsx
  )
}

export default Cuisine