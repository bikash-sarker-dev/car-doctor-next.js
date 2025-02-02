"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = (e) => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      let res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      console.log(res);
      if (res.ok) {
        router.push("/");
        form.reset();
      } else {
        alert("authentication Failed !");
      }
    } catch (error) {
      console.log(error);
      alert("authentication Failed !");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="card-body">
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
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
