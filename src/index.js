const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


//const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')

const myFunction = async () => {
   const token = jwt.sign({ _id:'abc1233'}, 'thisismynewcourse', {expiresIn:'7 days'})
   const data =jwt.verify(token , 'thisismynewcourse')
   console.log(token)
   console.log(data)
}

myFunction()