"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session);

  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>about</Link>
        </li>
        <li>
          <Link href={"/service"}>services</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
      </>
    );
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navMenu()}
          </ul>
        </div>
        <Link href="/">
          <Image width={60} height={60} src="/assets/logo.svg" alt="images" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
      </div>
      <div className="navbar-end space-x-4">
        {status === "authenticated" ? (
          <>
            <div>
              <Image
                src={session.user.image}
                width={40}
                height={40}
                alt="profile"
                className="rounded-full"
              />
            </div>
            <button onClick={() => signOut()} className="btn btn-sm">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-sm" href={"/login"}>
              Login
            </Link>
            <Link className="btn btn-sm" href={"/register"}>
              register
            </Link>
          </>
        )}

        <button className="btn btn-outline">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
