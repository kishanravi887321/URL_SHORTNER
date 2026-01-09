import { MongoClient,ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import path from "path";
import {fileURLToPath} from "url";

const filename= fileURLToPath(import.meta.url);
const dirname= path.dirname(filename);

dotenv.config({path:path.resolve(dirname,"../../../.env")});

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
