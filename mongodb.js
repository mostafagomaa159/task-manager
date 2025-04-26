//CRUD Create / Read / Update / Delete

// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, (error, client) => {
//     if (error) {

//         return console.log('Unable to connect to database!')
//     }
//     const db = client.db(databaseName)

    //Create insertOne
    // db.collection('users').insertOne({
    //     name: 'Mostafa',
    //     age: 24
    // },(error,result)=>{
    //         if(error){
    //             return console.log('Unable to insert data')
    //         }
    //         console.log(result.ops)
    // })

    //Create insertMany

    // db.collection('users').insertMany([
    //     {
    //         name: 'Gom3a',
    //         age: 23
    //     }, {
    //         name: 'Ahmed',
    //         age: 15
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)

    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Clean the house',
    //         completed:true
    //     },
    //     {
    //         description:'Renew inspectione',
    //         completed:false
    //     },
    //     {
    //         description:'Pot plants',
    //         completed:true
    //     },

    // ],(error,result)=>{
    //          if (error) {
    //         return console.log('Unable to insert tasks!!')
    //     }
    //     console.log(result.ops)
    // })

    //Read findOne
    // db.collection('users').findOne({name:'Gom3a'},(error,user)=>{

    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('tasks').findOne({_id:new ObjectID("6805f0486ecb255c541a3b59")},(error,tasks)=>{
    //     if(error){
    //         return console.log('Unable to find the task')
    //     }
    //     console.log(tasks)
    // })

    //Read find
    // db.collection('users').find({ name: 'Gom3a' }).toArray((error, user) => {

    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({ name: 'Gom3a' }).count((error, count) => {

    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(count)
    // })


    // db.collection('tasks').find({completed:true}).toArray((error,tasks)=>{
    //     if(error){
    //         return console.log('Unable to find')
    //     }
    //     console.log(tasks)
    // })

    //UpdateOne
    //  db.collection('users').updateOne({
    //     _id: new ObjectID('6805ed46f449c11fb04d8bc8')
    //   }, {
    //     $set : {
    //         name: 'Mido'
    //     }
    //   }).then((result)=>{
    //         console.log(result)
    //   }).catch((error)=>{
    //     console.log(error)
    //   })

    //UpdateMany
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: { completed: true }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //DeleteOne
    // db.collection('users').deleteOne({
    //     age:23
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    //DeleteMany
    // db.collection('users').deleteMany({
    //     age:23
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

})


