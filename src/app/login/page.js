import LoginForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center mt-32">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <LoginForm />
        <SocialLogin />
      </div>
    </div>
  );
};

export default LoginPage;
