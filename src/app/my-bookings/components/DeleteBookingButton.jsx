"use client";

import { useRouter } from "next/navigation";

const DeleteBookingButton = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
  };

  return (
    <button onClick={() => handleDelete(id)} className="btn bg-red-500">
      Delete
    </button>
  );
};

export default DeleteBookingButton;
