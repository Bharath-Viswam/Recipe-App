const express = require('express')
const cors = require('cors')
const recipeModel = require('./model/recipeDb')

const app = new express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/indiancuisine',async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods-GET,POST,PUT,DELETE")
    var data= await recipeModel.find({cuisine:'Indian'})
    res.json(data)
})
app.get('/americancuisine',async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods-GET,POST,PUT,DELETE")
    var data= await recipeModel.find({cuisine:'American'})
    res.json(data)
})
app.get('/italiancuisine',async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods-GET,POST,PUT,DELETE")
    var data= await recipeModel.find({cuisine:'Italian'})
    res.json(data)
})
app.get('/chinesecuisine',async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods-GET,POST,PUT,DELETE")
    var data= await recipeModel.find({cuisine:'Chinese'})
    res.json(data)
})
app.get('/recipes', async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods-GET,POST,PUT,DELETE")
    var data = await recipeModel.find()
    res.json(data)
})

app.post('/addrecipe',async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods-GET,POST,PUT,DELETE")
    console.log(req.body);
var data = await new recipeModel(req.body)
data.save()
res.send({status:'data saved'})
})

app.put('/updaterecipe/:name',async(req,res)=>{
console.log(req.body);
console.log(req.params.name);
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods-GET,POST,PUT,DELETE")
    let recipename = req.params.name
    try{
        var data = await recipeModel.findOneAndUpdate({title:recipename},req.body)
        res.json({status:'updated'})
        console.log('done')
    }
    catch(err){
res.status(500).send(err)
    }
})

app.delete('/deleterecipe/:name',async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods-GET,POST,PUT,DELETE")
    let recipename = req.params.name
    await recipeModel.deleteOne({title:recipename})
    res.json({status:'deleted'})

})


app.listen(3001,()=>{
    console.log("Server running on port 3001");
})