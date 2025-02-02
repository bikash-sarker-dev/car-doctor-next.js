import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center mt-32">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
