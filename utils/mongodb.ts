import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.DBURI;
const MONGODB_NAME = process.env.DB;

if (!MONGODB_NAME || !MONGODB_URI)
  throw new Error("MongoDB envs not available");

let cachedDb = null;

async function connectToDB() {
  if (cachedDb) {
    return {
      db: cachedDb,
    };
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();

  const db = await client.db(MONGODB_NAME);

  cachedDb = db;

  return {
    db: cachedDb,
  };
}

export default connectToDB;
