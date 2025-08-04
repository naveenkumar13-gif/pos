// app/forgot-password/page.tsx
"use client";

import { useState } from "react";
import { forget_password } from "../../../public/images";
import Input from "@/components/inputs";
import Button from "@/components/button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Send reset link to:", email);
  };

  return (
    <div className="!p-2 max-md:!p-4 ">
      <header className=" max-sm:max-w-2xs max-sm:mx-auto max-sm:text-center  max-sm:hidden">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold ">
            Bill <span className="text-red-500">Mate</span>
          </h1>
        </Link>
      </header>
      <div className="flex min-h-screen items-center justify-center gap-5 max-sm:flex-col">
        <header className="  hidden max-sm:block  ">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold  max-sm:text-3xl">
              Bill <span className="text-red-500">Mate</span>
            </h1>
          </Link>
        </header>
        <div className="relative h-[400px] w-[400px] mb-6 max-md:w-[300px] max-md:h-[300px] max-sm:hidden">
          <Image
            src={forget_password}
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        <form
          onSubmit={handleForgot}
          className=" p-6  flex flex-col justify-around gap-6 w-80  "
        >
          <h2 className="text-3xl font-bold mb-4">Forgot Password</h2>
          <p className="text-sm mb-4">
            Please enter your email address below you will receive a
            verification link
          </p>
          <div className="relative w-full">
            <span className="absolute left-3 top-2.5 text-red-500">
              <FontAwesomeIcon icon={faAt} />
            </span>
            <Input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" w-full !pl-10"
              placeholder="Email"
            />
          </div>
          <Button className="w-full !bg-[#FF0000] !text-white !p-6 rounded !text-xl">
            continue
          </Button>
        </form>
      </div>
    </div>
  );
}
