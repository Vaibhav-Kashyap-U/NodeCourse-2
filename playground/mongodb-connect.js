const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, client) => {
    if (error){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');
    
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     completed : false

    // },(error,result)=>{
    //     if (error) {
    //         return console.log('Unable to insert todo');
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // });

    // db.collection('Users').insertOne({
    //     name : 'Vaibhav',
    //     age : 20,
    //     location : '#7 , G-2 , Bangalore'
    // },(error,result)=>{
    //     if(error) {
    //         return console.log('Unable to connect to MongoDB');
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));

    // });

    client.close();
});