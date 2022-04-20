const express =require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const {acnhApi} = require('./acnh-api')

app.use(express.json())
app.use(express.static('public'))
app.set('view engine','ejs') //this tells express to render views w/ ejs
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const villagerController = require('./controllers').villager

app.get('/api/villager',(req,res) =>{
    villagerController.list(req,res)
        .then(island =>res.status(200).send(island)) //moving server response to server.js
        .catch(error => res.status(400).send(error))}) //going to this endpoint 'gets'/lists all villagers
app.get('/api/villager/:id',villagerController.getById) //gets villager by ID
app.post('/api/villager',villagerController.add)
app.put('/api/villager/:id',villagerController.update)
app.delete('/api/villager/:id',villagerController.delete)

const islandController = require('./controllers').island

app.get('/api/island',islandController.list) //going to this endpoint 'gets'/lists all islands
app.get('/api/island/:id',islandController.getById) //gets islands by ID
app.post('/api/island',(req,res) =>{
    console.log('getting villagers')
    acnhApi.getVillager().then(response =>{
        console.log('got villagers')
        let randomVillagers = []
        for(let i = 0; i < 3; i++){
            let randomIndex
            do {
                randomIndex = Math.floor(Math.random() * response.data.length)
            } while (randomVillagers.includes(randomIndex))
            randomVillagers.push(randomIndex)
        }
        req.body.villagers = []
        
        for (let i = 0; i < randomVillagers.length; i++) {
         
          let villager = {
              apiId: response.data[randomVillagers[i]].id,
              name: response.data[randomVillagers[i]].name,
              imageUrl: response.data[randomVillagers[i]].nh_details.photo_url,
              species: response.data[randomVillagers[i]].species,
              personality: response.data[randomVillagers[i]].personality
          }
          req.body.villagers.push(villager)
        }
        islandController.add(req,res)
        .then(island =>res.redirect('/social-critters')) //should refresh w/ new island
        .catch(error => res.status(400).send(error))
        
        
    })
})
app.put('/api/island/:id',islandController.update)
app.delete('/api/island/:id',islandController.delete)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'))
})
app.get('/social-critters', (req,res) =>{
    console.log('getting islands')
    islandController.list(req,res).then(islands =>{
        console.log('rendering social critters')
        console.log(islands)
        res.render('social-critters', { //binds object model to 'view' and allows us to display islands 
            islands: islands 
        })
    })
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

app.get('/villagers',(req,res) =>{
    console.log('git villager')
    acnhApi.getVillager().then(response =>{
        console.log(response.data)
        res.send(response.data)
    })
})

const port = process.env.PORT || 5050;

app.listen(port,()=>{
    console.log(`the server is LIIIIIIIVE on ${port}`)
})