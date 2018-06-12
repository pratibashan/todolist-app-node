
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

let todoListArray = []

const TodoItem = require('./todolist')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })
  
  

app.get('/todolist',function(req,res){
   

    
    res.json(todoListArray)
       
        
})

app.post('/todolist',function(req,res){

    console.log(req.body.title)
    console.log(req.body.priority)
    console.log(req.body.dateCreated)
    console.log(req.body.dateCompleted)
    console.log(req.body.isCompleted)

    let todoTitle = req.body.title
    let priority = req.body.priority
    let dateCreated = req.body.dateCreated
    let dateCompleted = req.body.dateCompleted
    let isCompleted = req.body.isCompleted

    let todoItem1 = new TodoItem({
        title:todoTitle,
        priority:priority,
        DateCreated:dateCreated,
        DateCompleted:dateCompleted,
        Completed:isCompleted
    })

    todoListArray.push(todoItem1)
    //res.send("Thanks for posting")
    res.json(todoItem1)
})

// app.post('/todolist',function(req,res){

    
//     console.log(req.body.title)
//     console.log(req.body.priority)
    
    
//     res.send("Thanks for posting")
// })

app.listen(3000, () => console.log('Example app listening on port 3000!'))
