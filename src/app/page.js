"use client";

// core
import { useRouter, usePathname } from "next/navigation";

// components
import BottomNavbar from "@/components/BottomNavbar";
import { BsCart2 } from "react-icons/bs";
import { BiHomeAlt, BiMoney } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";

// utils
import { formatRupiah } from "@/utils/formatRupiah";

export default function Home() {
    // const sidebar = [
    //     {
    //         id: 1,
    //         icon: <BiHomeAlt />,
    //         name: "Dashboard",
    //     },
    //     {
    //         id: 2,
    //         icon: <BsCart2 />,
    //         name: "Produk",
    //     },
    //     {
    //         id: 3,
    //         icon: <BiMoney />,
    //         name: "Transaksi",
    //     },
    //     {
    //         id: 4,
    //         icon: <TbReportAnalytics />,
    //         name: "Laporan",
    //     },
    // ];

    const dashboardMenu = [
        {
            id: 1,
            name: "Pendapatan Hari Ini",
            price: 500000,
        },
        {
            id: 2,
            name: "Transaksi Hari Ini",
            total: 10,
        },
        {
            id: 3,
            name: "Semua Pendapatan",
            price: 10000000,
        },
        {
            id: 4,
            name: "Semua Transaksi",
            total: 50,
        },
    ];

    const handlingDashMenuStyle = (menuId) => {
        switch (menuId) {
            case 1:
                return "border-ngaos-1 bg-ngaos-1";
            case 2:
                return "border-ngaos-5 bg-ngaos-5";
            case 3:
                return "border-ngaos-3 bg-ngaos-3";
            case 4:
                return "border-ngaos-6 bg-ngaos-6";

            default:
                return "border-ngaos-1 bg-ngaos-1";
        }
    };

    return (
        <main>
            {/* MOBILE MODE */}
            <section className="h-screen lg:hidden font-poppins">
                {/* content */}
                <div className="px-4">
                    <h1 className="font-bold pt-7 text-head-2 text-ngaos-4">
                        Data Penjualan
                    </h1>
                    {/* menu */}
                    <div className="flex flex-col gap-3 mt-5 ">
                        {dashboardMenu &&
                            dashboardMenu.map((dashboardMenuItem, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`${handlingDashMenuStyle(
                                            dashboardMenuItem.id
                                        )} border rounded-rad-2 p-3 h-[100px] flex flex-col justify-between`}
                                    >
                                        <h2 className="font-bold text-black text-head-1">
                                            {dashboardMenuItem.name}
                                        </h2>
                                        <div>
                                            {dashboardMenuItem.price && (
                                                <h3 className="font-semibold text-white text-head-2">
                                                    {formatRupiah(
                                                        dashboardMenuItem.price
                                                    )}
                                                </h3>
                                            )}
                                            {dashboardMenuItem.total && (
                                                <h3 className="font-semibold text-white text-head-2">
                                                    {dashboardMenuItem.total}
                                                </h3>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    {/* menu */}
                </div>

                {/* divider */}
                <div className="invisible h-[100px]"></div>
                {/* divider */}
                {/*  */}
                {/* content */}
                <BottomNavbar />
            </section>
            {/* MOBILE MODE */}
        </main>
    );
}
