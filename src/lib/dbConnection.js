// username: car-doctor-nextjs
// password: DBhG2DMPZP2H5NO7

import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionAllName = {
  serviceCollection: "services",
  userCollection: "users",
  bookingsCollection: "bookings",
};

function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URL;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
}

export default dbConnect;
