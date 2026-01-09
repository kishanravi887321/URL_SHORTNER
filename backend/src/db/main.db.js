import { MongoClient,ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config({path:"../../../.env"});

// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGO_URL;

console.log("MongoDB URI:", uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);


export default client;
