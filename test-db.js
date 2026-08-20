
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://yasmeenfoaud7_db_user:yasmeen123@ac-tiglcmc-shard-00-00.3be32xm.mongodb.net:27017,ac-tiglcmc-shard-00-01.3be32xm.mongodb.net:27017,ac-tiglcmc-shard-00-02.3be32xm.mongodb.net:27017/?ssl=true&replicaSet=atlas-2fujqv-shard-0&authSource=admin&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
    await client.close();
  }
}
run().catch(console.dir);
require('dotenv').config();
const mongoose = require('mongoose');

console.log('Testing connection with URI:', process.source);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected successfully in test file!');
    process.exit(0);
  })
  .catch((err) => {
    console.log('❌ Connection Failed Error:', err.message);
    process.exit(1);
  });
