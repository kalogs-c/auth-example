import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DBURI);

async function connectToDB() {
  if (!client.isConnected()) await client.connect();

  const db = client.db(process.env.DB);
  return { db, client };
}

export default connectToDB;
