"use server";

import dbConnect, { collectionAllName } from "@/lib/dbConnection";
import bcrypt from "bcrypt";

const loginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect(collectionAllName.userCollection);
  const user = await userCollection.findOne({ email });

  if (!user) {
    return null;
  }
  const isPasswordOk = bcrypt.compare(user.password, password);
  if (!isPasswordOk) {
    return null;
  }

  return user;
};

export default loginUser;
