import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

// check the MongoDB URI
if (!MONGODB_URI) {
  throw new Error(
    "Define the MONGODB_URI environmental variable in the next.config.js file."
  );
}

let cachedClient,
  cachedDb = null;

export async function MONGODB_CONNECTION() {
  // Check the cached data
  if (cachedClient && cachedDb) {
    // Load from cached data
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // set the connection options
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  // Connect to cluster
  const client = MongoClient.connect(MONGODB_URI, options);
  const db = (await client).db();

  // Set cache to new data
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
