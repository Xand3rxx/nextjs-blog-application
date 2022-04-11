import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB_NAME;

// check the MongoDB URI
if (!MONGODB_URI) {
  throw new Error(
    "Define the MONGODB_URI environmental variable in the next.config.js file."
  );
}
// check the MongoDB DB
if (!MONGODB_DB) {
  throw new Error(
    "Define the database name with MONGODB_DB_NAME environmental variable in the next.config.js file."
  );
}

let cachedClient,
  cachedDb = null;

export async function DB_CONNECTION() {
  // Check the cached
  if (cachedClient && cachedDb) {
    // Load from cache
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
  const client = new MongoClient(MONGODB_URI, options);
  await client.connect();
  const db = (await client).db();

  //   let db = client.db(MONGODB_DB);

  // Set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
