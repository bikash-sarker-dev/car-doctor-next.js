"use client";

import registerUser from "@/app/actions/auth/RegisterUser";

const RegisterForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const payload = { name, email, password };
    await registerUser(payload);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">user Name</span>
        </label>
        <input
          type="text"
          name="username"
          placeholder="user name"
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
          name="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
