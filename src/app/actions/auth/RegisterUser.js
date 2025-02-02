"use server";

import dbConnect, { collectionAllName } from "@/lib/dbConnection";
import bcrypt from "bcrypt";

const registerUser = async (payload) => {
  const usersCollection = dbConnect(collectionAllName.userCollection);

  const { email, password } = payload;
  if (!email || !password) {
    return { message: false };
  }
  console.log(payload);
  const user = await usersCollection.findOne({ email: payload.email });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await usersCollection.insertOne(payload);
    result.insertedId = result.insertedId.toString();
    return result;
  }
  return { message: false };
};

export default registerUser;
