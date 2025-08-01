"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/inputs";
import Image from "next/image";
import Button from "@/components/button";
import { login } from "../../../public/images";
import { fb, google } from "../../../public/icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ email, password });
    //  router.push("/dashboard")
  };

  return (
    <div className="!p-2 max-md:!p-4 ">
      <header className=" max-sm:max-w-2xs max-sm:mx-auto max-sm:text-center  max-sm:hidden">
        <h1 className="text-2xl font-bold ">
          Bill <span className="text-red-500">Mate</span>
        </h1>
      </header>
      <div className=" flex items-center justify-around min-h-screen  max-md:!p-4 max-sm:flex-col ">
        <header className="  hidden max-sm:block ">
          <h1 className="text-2xl font-bold  max-sm:text-3xl">
            Bill <span className="text-red-500">Mate</span>
          </h1>
        </header>
        <div className="p-4  flex relative mb-6  w-[462px] h-[398px] max-md:w-[300px] max-md:h-[300px] max-sm:hidden">
          <Image src={login} alt="Logo" fill />
        </div>
        <form onSubmit={handleLogin} className=" p-6  w-80 flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome back</h2>
          </div>
          <div className="relative w-full ">
            <span className="absolute left-3 top-2 text-red-500">
              <FontAwesomeIcon icon={faAt} />
            </span>

            <InputField
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email"
              className=""
            />
          </div>
          <div className="w-full relative">
            <span className="absolute left-3 top-2 text-red-500">
              <FontAwesomeIcon icon={faLock} />
            </span>

            <InputField
              className=""
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="password"
            />
          </div>
          <p className="mt-2 text-sm ">
            <a
              href="forget-password"
              className="text-[#ff0000] font-bold text-end w-full inline-block"
            >
              Forgot Password?
            </a>
          </p>
          <Button className="w-full !bg-[#FF0000] !text-white !p-6 rounded !text-xl">
            login
          </Button>
          <div className="flex items-center justify-center gap-2">
            <p className="w-full h-[1.5px] bg-[#000000] inline-block"></p>
            <span>or</span>
            <p className="w-full h-[1.5px] bg-[#000000] inline-block"></p>
          </div>
          <div className="flex items-center justify-between gap-8">
            <button className=" text-black shadow !p-2 rounded flex-1 items-center justify-center flex gap-2">
              <Image src={google} alt="Google" width={20} height={20} />
              Google
            </button>
            <button className=" text-black shadow !p-2 rounded flex-1 items-center justify-center flex gap-2">
              <Image src={fb} alt="Facebook" width={20} height={20} />
              Facebook
            </button>
          </div>

          <div className="flex items-center justify-center !p-1">
            <p className="text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#ff0000] font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
