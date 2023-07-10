"use client";

//core
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

//third parties
import { useSession } from "next-auth/react";
import axios from "axios";

//redux
import { useSelector } from "react-redux";
import { getRole } from "@/store/user";

//components
import { MdOutlineAccountCircle, MdAddCircle } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { SlNotebook } from "react-icons/sl";

//apis
import { WHO_AM_AI_URL } from "@/apis/api";

export default function BottomNavbar() {
    //core
    const router = useRouter();
    const pathname = usePathname();

    //redux
    const role = useSelector(getRole);

    return (
        <div className="fixed inset-x-0 bottom-0 flex h-[80px] justify-around  bg-white p-2  text-center text-3xl shadow-low ">
            <div
                onClick={() =>
                    pathname === "/" ? router.refresh() : router.push("/")
                }
                className={`${
                    pathname === "/" ? "text-ngaos-4" : "text-ngaos-1"
                } flex cursor-pointer flex-col items-center justify-center gap-1`}
            >
                <BiHomeAlt />
                <h1 className="font-bold text-body-1">Home</h1>
            </div>
            <div
                onClick={() =>
                    pathname === "/transaction"
                        ? router.refresh()
                        : router.push("/transaction")
                }
                className={`${
                    pathname === "/transaction"
                        ? "text-ngaos-4"
                        : "text-ngaos-1"
                } flex cursor-pointer flex-col items-center justify-center gap-1`}
            >
                <BsCart2 />
                <h1 className="font-bold text-body-1">Transaksi</h1>
            </div>
            {role === "admin" && (
                <div
                    onClick={() =>
                        pathname === "/product"
                            ? router.refresh()
                            : router.push("/product")
                    }
                    className={`${
                        pathname === "/product"
                            ? "text-ngaos-4"
                            : "text-ngaos-1"
                    } flex cursor-pointer flex-col items-center justify-center gap-1`}
                >
                    <MdAddCircle />
                    <h1 className="font-bold text-body-1">Produk</h1>
                </div>
            )}
            <div
                onClick={() =>
                    pathname === "/history" || pathname === "/history/detail"
                        ? router.refresh()
                        : router.push("/history")
                }
                className={`${
                    pathname === "/history" || pathname === "/history/detail"
                        ? "text-ngaos-4"
                        : "text-ngaos-1"
                } flex cursor-pointer flex-col items-center justify-center gap-1`}
            >
                <SlNotebook />
                <h1 className="font-bold text-body-1">History</h1>
            </div>

            <div
                onClick={() =>
                    pathname === "/akun"
                        ? router.refresh()
                        : router.push("/akun")
                }
                className={`${
                    pathname === "/akun" ? "text-ngaos-4" : "text-ngaos-1"
                } flex cursor-pointer flex-col items-center justify-center gap-1`}
            >
                <MdOutlineAccountCircle />
                <h1 className="font-bold text-body-1"> Akun</h1>
            </div>
        </div>
    );
}
