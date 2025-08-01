// app/reset-password/page.tsx
"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Input from "@/components/inputs";
import Button from "@/components/button";
import { reset_password } from "../../../public/images";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "Resetting password with token:",
      token,
      "New password:",
      newPassword
    );
  };

  return (
    <div className="!p-2 max-md:!p-4 ">
      <header className=" max-sm:max-w-2xs max-sm:mx-auto max-sm:text-center  max-sm:hidden">
        <h1 className="text-2xl font-bold ">
          Bill <span className="text-red-500">Mate</span>
        </h1>
      </header>
      <div className=" flex justify-center items-center min-h-screen gap-6 max-md:!p-4 max-sm:flex-col">
        <header className="  hidden max-sm:block ">
          <h1 className="text-2xl font-bold  max-sm:text-3xl">
            Bill <span className="text-red-500">Mate</span>
          </h1>
        </header>
        <div className="flex justify-center w-full gap-4">
          <div className="relative h-[400px] w-[400px] max-md:w-[300px] max-md:h-[300px] max-sm:hidden">
            <Image
              src={reset_password}
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <form
            onSubmit={handleReset}
            className=" p-6  flex flex-col justify-center gap-6 w-96 "
          >
            <h2 className="text-3xl font-bold mb-4">Reset Password</h2>
            <div className="relative w-full">
              <span className="absolute left-3 top-2.5 text-red-500">
                <FontAwesomeIcon icon={faAt} />
              </span>
              <Input
                name="email"
                type="email"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
                required
              />
            </div>
            <div className="w-full relative">
              <span className="absolute left-3 top-2 text-red-500">
                <FontAwesomeIcon icon={faLock} />
              </span>

              <Input
                className=""
                type="password"
                name="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password"
              />
            </div>
            <Button className=" !bg-[#FF0000] !text-white !p-6 rounded !text-xl ">
              change password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
