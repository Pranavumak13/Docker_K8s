const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.json({
        "Name":"Nodejs"
    })
})

app.listen(port, ()=>{
    console.log(`The app is up and running on port:${port}`); 
})