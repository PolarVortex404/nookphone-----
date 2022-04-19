const express =require('express')
const app = express()
const path = require('path')
const {acnhApi} = require('./acnh-api')

app.use(express.json())
app.use(express.static('public'))

const apiRouter = require('./routes/api')
app.use('/api',apiRouter)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'))
})
app.get('/bugs',(req,res) => {
    console.log('gettingbugs')
    acnhApi.getBugs().then(response => {
        console.log('got bugs')
        console.log(response.data)
        res.send(response.data)
    }) 
   
    //  res.send(acnhApi.getBugs())
})
app.get('/fish',(req,res)=>{
    console.log('gone fishing')
    acnhApi.getFish().then(response =>{
        console.log('got feesh')
        console.log(response.data)
        res.send(response.data)
    })
})

app.get('/sea',(req,res)=>{
    console.log('diving for sea critters')
    acnhApi.getSea().then(response =>{
        console.log(response.data)
        res.send(response.data)
    })
})


const port = process.env.PORT || 5050;

app.listen(port,()=>{
    console.log(`the server is LIIIIIIIVE on ${port}`)
})