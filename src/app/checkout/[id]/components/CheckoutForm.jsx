"use client";

import { useSession } from "next-auth/react";

const CheckoutForm = ({ data }) => {
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const allValue = Object.fromEntries(formData.entries());

    const payload = {
      ...allValue,
      service_id: data._id,
      service_name: data.title,
      service_img: data.img,
      service_price: data.price,
    };

    const res = await fetch("http://localhost:3000/api/service", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        ContentType: "application/json",
      },
    });
    const postResponse = await res.json();
    console.log(postResponse);
  };
  return (
    <div className="card bg-base-100 w-full max-w-3xl mx-auto mt-10  shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={session?.user?.name}
            readOnly
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="data"
            placeholder=""
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">amount</span>
          </label>
          <input
            type="number"
            defaultValue={data.price}
            readOnly
            name="amount"
            placeholder="amount"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">phone</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="phone"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="address"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            defaultValue={session?.user?.email}
            readOnly
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
