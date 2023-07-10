"use client";

// core
import { useEffect, useState } from "react";

//third parties
import { useSession } from "next-auth/react";
import axios from "axios";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getRole, userSlice } from "@/store/user";

// components
import BottomNavbar from "@/components/BottomNavbar";

// utils
import { dashboardMenu } from "@/utils/generateMenu";
import { handlingDashMenuStyle } from "@/utils/generateStyle";
import { formatRupiah } from "@/utils/formatRupiah";
import { WHO_AM_AI_URL } from "@/apis/api";

export default function Home() {
    //core
    const session = useSession();
    const dispatch = useDispatch();
    let token = session?.data?.user?.token;

    //redux
    const role = useSelector(getRole);
    const { setRole } = userSlice.actions;

    //useeffects
    useEffect(() => {
        if (token) {
            try {
                const fetchDataUser = async () => {
                    const res = await axios.get(WHO_AM_AI_URL, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    if (!role || res?.data?.role !== role) {
                        dispatch(setRole(res.data.role));
                    }
                };
                fetchDataUser();
            } catch (error) {}
        }
    }, [token, dispatch, role, setRole]);

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
