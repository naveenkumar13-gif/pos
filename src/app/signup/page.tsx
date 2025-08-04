"use client";
import { useState } from "react";
import InputField from "@/components/inputs";
import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";
import { signup } from "../../../public/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, confirmPassword });
    // Handle signup
  };

  return (
    <div className="!p-2">
      <header className=" max-sm:max-w-2xs max-sm:mx-auto max-sm:text-center  max-sm:hidden">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold ">
            Bill <span className="text-red-500">Mate</span>
          </h1>
        </Link>
      </header>
      <div className=" flex items-center justify-center gap-6 min-h-screen max-md:!p-4 max-sm:flex-col ">
        <header className="  hidden max-sm:block">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold  max-sm:text-3xl">
              Bill <span className="text-red-500">Mate</span>
            </h1>
          </Link>
        </header>
        <div className="p-4 flex relative mb-6  w-[500px] h-[400px] max-sm:hidden ">
          <Image src={signup} alt="Logo" fill />
        </div>
        <form
          onSubmit={handleSignup}
          className=" !p-6   flex flex-col gap-6
      "
        >
          <h2 className="text-3xl font-bold mb-4">Welcom Back!</h2>
          <div className="relative w-full">
            <span className="absolute left-3 top-2 text-red-500">
              <FontAwesomeIcon icon={faAt} />
            </span>

            <InputField
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" w-full !pl-10"
              placeholder="email"
            />
          </div>
          <div className="w-full relative">
            <div>
              <span className="absolute left-3 top-2 text-red-500">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>

            <InputField
              className="!pl-10"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="password"
            />
          </div>
          <div className="w-full relative">
            <div>
              <span className="absolute top-2 left-3 text-red-500">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>

            <InputField
              className="!pl-10"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="confirmPassword"
            />
          </div>

          <p className="mt-2 text-sm ">
            By signing Below, You agree to the{" "}
            <span className="text-[#FF0000]">Terms of use</span> and{" "}
            <span className="text-[#FF0000]">Privacy Policy</span>.
          </p>
          <Button className="w-full !bg-[#FF0000] !text-white !p-6 rounded !text-xl">
            Sign Up
          </Button>
          <div className="flex items-center justify-center gap-2">
            <p className="w-full h-[1.5px] bg-[#000000] inline-block"></p>
            <span>or</span>
            <p className="w-full h-[1.5px] bg-[#000000] inline-block"></p>
          </div>

          <div className="flex items-center justify-center   !p-1">
            <p className="text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/login" className="text-[#ff0000] font-semibold ">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
