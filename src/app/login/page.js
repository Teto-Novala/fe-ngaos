"use client";

//core
import { useEffect, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

//third parties
import axios from "axios";

//components
import Label from "@/components/Label";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import BottomNavbar from "@/components/BottomNavbar";

//apis
import { LOGIN_URL } from "@/apis/api";

export default function Akun() {
  const router = useRouter();
  // let token = session?.user?.token;

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Login data must fill All!");
      return;
    }

    signIn("credentials", {
      email: loginData.email,
      password: loginData.password,
      redirect: false,
    }).then((res) => {
      if (res.error) {
        alert(res.error);
      }
      if (!res.error) {
        router.refresh();
        router.replace("/");
      }
    });
  };

  return (
    <>
      {/* DESKTOP MODE
        main : All
        section : xl:w-1/2
        content : xl:w-1/2 */}
      <main className="xl:flex xl:items-center">
        <section className="font-poppins hidden xl:w-[45%] xl:self-stretch xl:flex xl:items-center xl:justify-center xl:bg-ngaos-3">
          <div className="text-net-1 text-center flex flex-col gap-y-3 items-center">
            <h1 className="text-3xl font-bold">Hallo!</h1>
            <p>
              lorem sdfasdfa
              sdfasfasfasffsfsfadfsdfdsfafsdfasdfasdfasfasfasfsdsdfsadfasffasfafa
            </p>
            <button className="w-48 h-10 border text-white border-white rounded-rad-2 font-semibold">
              Daftar
            </button>
          </div>
        </section>
        {/* MOBILE MODE */}
        <section className="xl:w-1/2 flex flex-col items-center justify-center h-screen font-poppins">
          {/* content */}
          <div className="w-full xl:w-1/2 px-4">
            <h1 className="font-bold pt-7 text-head-2 text-ngaos-4">Login</h1>
            {/* menu */}

            <form onSubmit={handleLogin} className="flex flex-col gap-3 mt-5 ">
              {/* email */}
              <div className="flex flex-col gap-1">
                <Label>Email</Label>
                <Input
                  name={"email"}
                  onChange={handleChange}
                  value={loginData.email}
                  placeholder={"arief@gmail.com"}
                  type="email"
                />
              </div>
              {/* email */}

              {/* password */}
              <div className="flex flex-col gap-1">
                <Label>Password</Label>
                <PasswordInput
                  name={"password"}
                  onChange={handleChange}
                  value={loginData.password}
                  placeholder={"input your password"}
                />
              </div>
              {/* password */}

              {/* harga  */}
              <div className="mt-5">
                <Button type="submit">Masuk</Button>
              </div>
              {/* harga  */}
            </form>

            {/* menu */}
          </div>
          {/* content */}
          {/* divider */}
          <div className="invisible h-[100px]"></div>
          {/* divider */}
          {/* <BottomNavbar /> */}
        </section>
        {/* MOBILE MODE */}
      </main>
      {/* DESKTOP MODE */}
    </>
  );
}
