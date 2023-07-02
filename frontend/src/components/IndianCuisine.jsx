import { Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PeopleIcon from '@mui/icons-material/People';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCuisine from './AddCuisine';

const IndianCuisine = (props) => {
    const location = useLocation()
    const[data,setData] = useState([])
    const [reload, setReload] = useState(false);
    const[singleValue,setSingleValue] = useState([])
  const navigate = useNavigate()
    const[update,setUpdate] =useState(false)
    const propsData = location.state 
    console.log(propsData);

    useEffect(()=>{
  
            console.log("hi");
            axios.get("http://localhost:3001/indiancuisine")
            .then((res)=>{
setData(res.data)

            })
        
   
    },[])
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

export default IndianCuisine