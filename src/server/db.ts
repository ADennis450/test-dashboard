import { MongoClient } from "mongodb";
import { MONGODB_URI, DATABASE } from "./config";

let connectedClient: MongoClient;

export const connectClient = async () => {
  if (connectedClient) {
    return connectedClient.db(DATABASE);
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  await client.db(DATABASE).command({ ping: 1 });

  connectedClient = client;
  return connectedClient.db(DATABASE);
};

export const stopClient = async () => {
  await connectedClient.close();
};
