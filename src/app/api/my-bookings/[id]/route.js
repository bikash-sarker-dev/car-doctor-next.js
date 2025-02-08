import dbConnect, { collectionAllName } from "@/lib/dbConnection";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const bookingCollection = dbConnect(collectionAllName.bookingsCollection);

  const singleBooking = await bookingCollection.findOne(query);

  return NextResponse.json(singleBooking);
};

export const PATCH = async (req, { params }) => {
  const { id } = await params;
  const body = await req.json();

  const bookingCollection = dbConnect(collectionAllName.bookingsCollection);

  const query = { _id: new ObjectId(id) };

  const UpdateValue = {
    $set: {
      ...body,
    },
  };

  const option = {
    upsert: true,
  };

  const UpdateResponse = await bookingCollection.updateOne(
    query,
    UpdateValue,
    option
  );

  revalidatePath("/my-bookings");
  return NextResponse.json(UpdateResponse);
};
