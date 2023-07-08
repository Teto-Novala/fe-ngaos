"use client";
import BottomNavbar from "@/components/BottomNavbar";
import Label from "@/components/Label";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";

export default function Akun() {
    return (
        <>
            {/* MOBILE MODE */}
            <section className="flex flex-col items-center justify-center h-screen lg:hidden font-poppins">
                {/* content */}
                <div className="w-full px-4">
                    <h1 className="font-bold pt-7 text-head-2 text-ngaos-4">
                        Login
                    </h1>
                    {/* menu */}

                    <form className="flex flex-col gap-3 mt-5 ">
                        {/* email */}
                        <div className="flex flex-col gap-1">
                            <Label>Email</Label>
                            <Input
                                readOnly
                                placeholder={"arief@gmail.com"}
                                type="email"
                            />
                        </div>
                        {/* email */}

                        {/* password */}
                        <div className="flex flex-col gap-1">
                            <Label>Password</Label>
                            <PasswordInput
                                placeholder={"input your password"}
                            />
                        </div>
                        {/* password */}

                        {/* harga  */}
                        <div className="mt-5">
                            <Button>Masuk</Button>
                        </div>
                        {/* harga  */}
                    </form>

                    {/* menu */}
                </div>
                {/* content */}
                {/* divider */}
                <div className="invisible h-[100px]"></div>
                {/* divider */}
                <BottomNavbar />
            </section>
            {/* MOBILE MODE */}
        </>
    );
}
