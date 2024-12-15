const express = require('express')

const app = express()

const PORT = 3010

app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.listen(PORT,()=>{
    console.log('Server started at http://localhost:'+PORT)
})