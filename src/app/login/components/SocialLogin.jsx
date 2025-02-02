"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();
  console.log(session.status);
  const handleSocialLogin = async (providerName) => {
    const result = await signIn(providerName);
    // console.log(result);
    // if (result.ok) {
    //   router.push("/");
    //   toast.success("Logged In Successfully");
    // } else {
    //   toast.error("something went wrong !");
    // }
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
      toast.success("Logged In Successfully");
    }
  }, [session.status]);
  return (
    <div className="flex justify-center  items-center mb-10 space-x-5">
      <button
        type="submit"
        onClick={() => handleSocialLogin("google")}
        className="btn"
      >
        google login
      </button>
      <button
        type="submit"
        onClick={() => handleSocialLogin("github")}
        className="btn"
      >
        Github login
      </button>
    </div>
  );
};

export default SocialLogin;
