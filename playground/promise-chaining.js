require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('6808883a5eb0b32870c643d9').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed : false})
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })


const deleteAndCount =async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count =await Task.countDocuments({completed:true})
    return count
}

deleteAndCount('68086664cc155329ac196908').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})