// "use client";

// import { useEffect, useState } from "react";
import { headers } from "next/headers";
import BookingTable from "./components/BookingTable";

const fetchMyBooking = async () => {
  const res = await fetch("http://localhost:3000/api/service", {
    headers: headers(),
  });
  const bookingData = await res.json();
  return bookingData;
};

const MyBookings = async () => {
  const data = await fetchMyBooking();
  console.log(data);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchMyBooking = async () => {
  //     const res = await fetch("http://localhost:3000/api/service");
  //     const BookingData = await res.json();
  //     setData(BookingData);
  //   };
  //   fetchMyBooking();
  // }, []);

  return (
    <div>
      <BookingTable data={data} />
    </div>
  );
};

export default MyBookings;
