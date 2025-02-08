import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionAllName } from "@/lib/dbConnection";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  console.log("delete", query);
  const deleteCollection = dbConnect(collectionAllName.bookingsCollection);

  // validation user then deleted
  const session = await getServerSession(authOptions);

  const currentBooking = await deleteCollection.findOne(query);

  const isOwnerOK = session?.user?.email === currentBooking.email;

  if (isOwnerOK) {
    // deleting user specific booking
    const result = await deleteCollection.deleteOne(query);
    revalidatePath("/my-bookings");
    return NextResponse.json(result);
  } else {
    return NextResponse.json({ success: false, message: "Forbidden Action" });
  }
};

export const GET = async (req, { params }) => {
  const p = await params;
  const serviceCollection = dbConnect(collectionAllName.serviceCollection);
  const data = await serviceCollection.findOne({ _id: new ObjectId(p) });
  return NextResponse.json(data);
};
