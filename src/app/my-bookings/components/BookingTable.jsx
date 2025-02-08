"use client";

import Image from "next/image";
import Link from "next/link";
import DeleteBookingButton from "./DeleteBookingButton";

const BookingTable = ({ data = [] }) => {
  console.log(data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>service Image</th>
              <th>service name</th>
              <th>service date</th>
              <th>service price</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={item._id}>
                <td>1</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <Image
                          src={item.service_img}
                          width={300}
                          height={200}
                          alt="Avatar Tailwind CSS Component"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.service_name}</td>
                <td>{item.data}</td>
                <td>{item.service_price}</td>
                <td>
                  <Link href={`/my-bookings/${item._id}`}>
                    <button className="btn btn-warning">Edit</button>
                  </Link>
                  <DeleteBookingButton id={item._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
