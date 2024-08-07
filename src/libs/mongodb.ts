import { MongoClient, ServerApiVersion } from "mongodb";

/**
 * Options for the mongo client 
 */
const options = {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
};


/**
 * The mongodb connection string
 */
const mongoUri = process.env.MONGODB_URI;

/**
 * The name of our database we want to connect to 
 */
export const dbName= process.env.DB_NAME;

/**
 * The name of the FAQs database we want to connect to
 */
// export const dbNameFaqs = process.env.DB_NAME_FAQS;

if(!mongoUri) {
    throw new Error("Invalid or missing Mongo connection string");
}

if(!dbName) {
    throw new Error("Invalid or missing Database name");
}

// if(!dbNameFaqs) {
//     throw new Error("Invalid or missing FAQs Database name");    
// }

let client;
let clientPromise:Promise<MongoClient>

//From the official mongodb nextjs documentation
if(process.env.NODE_ENV === 'production') {
    client = new MongoClient(mongoUri);
    clientPromise = client.connect();
} else {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(mongoUri);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
}

export default clientPromise;