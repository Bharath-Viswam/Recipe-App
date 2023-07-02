import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCuisine = (props) => {
    
    var navigate = useNavigate()
    var[inp,setInp] = useState(props.data)
    var uptitle = props.data.title
    console.log("props.data",props.data);
    console.log("props.method",props.method);
    const inputHandler = (e)=>{
        const{name,value}=e.target;
      
      
        setInp((inp)=>({...inp,[name]:value}))
    }
    const addHandler = ()=>{
        if(props.method==='post'){
            axios.post("http://localhost:3001/addrecipe",inp)
            .then((res)=>{
                alert('data added')
                navigate('/')

            })
            .catch(err=>console.log(err))
            setInp({image:'',title:'',duration:0,servings:0,cuisine:''})
        }
        if(props.method==='put'){

            axios.put("http://localhost:3001/updaterecipe/" +uptitle,inp)
            .then((res)=>{
                alert('updated')
                window.location.reload(false)
            })
        }
    }
  return (
    <div style={{paddingTop:'110px'}}>
        <TextField name='image' label='enter image url' value={inp.image} onChange={inputHandler}></TextField>
        <br /> <br />
        <TextField name='title' label='enter title' value={inp.title} onChange={inputHandler}></TextField>
        <br /> <br />
        <TextField name='duration' label='enter duration' value={inp.duration} onChange={inputHandler}></TextField>
        <br /> <br />
        <TextField name='servings' label='enter servings' value={inp.servings} onChange={inputHandler}></TextField>
        <br /> <br />
        <TextField name='cuisine' label='enter cuisine place' value={inp.cuisine} onChange={inputHandler}></TextField>
        <br /> <br />
        
        <Button variant='contained' onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default AddCuisine