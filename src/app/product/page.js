"use client";
import BottomNavbar from "@/components/BottomNavbar";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Product() {
    return (
        <>
            {/* MOBILE MODE */}
            <section className="h-screen lg:hidden font-poppins">
                {/* content */}
                <div className="px-4">
                    <h1 className="font-bold pt-7 text-head-2 text-ngaos-4">
                        Manajemen Produk
                    </h1>
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
