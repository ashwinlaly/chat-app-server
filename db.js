var mongodb = require('mongodb').MongoClient;

// create a common variable to reuse in other files
let _db;

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// export connection and db call methods
module.exports = {
    connection : callback => {
        // Connect to Mongo server -> DB 
        mongodb.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}?replicaSet=rs`, options, (err, con) => {
            if(err){
                // if any error occurs
                console.log("DB Connection failed",err);
            } else {
                // if connection is done
                _db = con.db(process.env.MONGO_DB);
                console.log("DB Connectin Sucessed.");
                callback();
            }
        });
    },
    get : () => {
        // retrive the reusable variable to manipulate in other files
        return _db;
    }
};