"use client";

import { useRouter, usePathname } from "next/navigation";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { SlNotebook } from "react-icons/sl";

export default function BottomNavbar() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="fixed inset-x-0 bottom-0 flex h-[60px] justify-around  bg-white p-2  text-center text-3xl shadow-low ">
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
                    pathname === "/product"
                        ? router.refresh()
                        : router.push("/product")
                }
                className={`${
                    pathname === "/product" ? "text-ngaos-4" : "text-ngaos-1"
                } flex cursor-pointer flex-col items-center justify-center gap-1`}
            >
                <BsCart2 />
                <h1 className="font-bold text-body-1">Input Transaksi</h1>
            </div>
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
