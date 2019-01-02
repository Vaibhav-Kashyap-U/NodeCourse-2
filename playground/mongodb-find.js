const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, client) => {
    if (error){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');
    
    const db = client.db('TodoApp');

    db.collection('Todos').find().toArray().then((docs)=>{ 
        console.log('Todos');
        console.log(JSON.stringify(docs));
    },(err) =>{
        console.log(err);
    });

    // client.close();
});