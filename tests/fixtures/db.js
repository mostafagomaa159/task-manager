const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Mostafa',
    email: 'mostafa@gmail.com',
    password: '123123!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'A7med',
    email: 'a7med@gmail.com',
    password: '123123123!',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}

const taskOne={
    _id:new mongoose.Types.ObjectId(),
    description:'First Task',
    completed:false,
    owner:userOne._id
}

const taskTwo={
    _id:new mongoose.Types.ObjectId(),
    description:'Second Task',
    completed:true,
    owner:userOne._id
}

const taskThree={
    _id:new mongoose.Types.ObjectId(),
    description:'Third Task',
    completed:false,
    owner:userTwo._id
}
const setupDatabase = async ()=>{
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports={
    userOneId,
    userOne,
    userTwo,
    userTwoId,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}