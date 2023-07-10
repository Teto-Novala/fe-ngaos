"use client";

//core
import { useEffect, useState } from "react";

//third parties
import { useSession, signOut } from "next-auth/react";
import axios from "axios";
import { FiArrowLeft, FiEdit3, FiSettings, FiLogOut } from "react-icons/fi";

//components
import Label from "@/components/Label";
import BottomNavbar from "@/components/BottomNavbar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";

//apis
import { WHO_AM_AI_URL } from "@/apis/api";

export default function Akun() {
    //core
    const session = useSession();
    let token = session?.data?.user?.token;

    //state
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    //effects
    useEffect(() => {
        if (token) {
            try {
                const fetchDataUser = async () => {
                    const res = await axios.get(WHO_AM_AI_URL, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    setUserData({
                        name: res.data.data.name,
                        email: res.data.data.email,
                        phone: res.data.data.phone,
                    });
                    // console.log("USER DATA", res);
                };
                fetchDataUser();
            } catch (error) {
                // console.log(error);
            }
        }
    }, [token]);

    return (
        <>
            {/* MOBILE MODE */}
            <section className=" h-screen lg:hidden font-poppins flex flex-col justify-center items-center">
                {/* content */}
                <div className="w-full px-4 ">
                    <div className="w-full flex flex-col gap-5">
                        <h1 className="font-bold pt-5 text-head-2 text-ngaos-4 text-center">
                            Selamat Datang
                        </h1>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <Label>Nama</Label>
                                <Input
                                    disabled
                                    value={
                                        !userData.name
                                            ? "Sedang mendapatkan data"
                                            : userData.name
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label>Email</Label>
                                <Input
                                    disabled
                                    value={
                                        !userData.email
                                            ? "Sedang mendapatkan data"
                                            : userData.email
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label>Phone</Label>
                                <Input
                                    disabled
                                    value={
                                        !userData.phone
                                            ? "Sedang mendapatkan data"
                                            : userData.phone
                                    }
                                />
                            </div>
                            <div>
                                <Button onClick={() => signOut()}>
                                    Keluar
                                </Button>
                            </div>
                        </div>
                    </div>
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
