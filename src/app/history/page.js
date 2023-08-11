"use client";
import BottomNavbar from "@/components/BottomNavbar";

export default function History() {
  return (
    <>
      {/* MOBILE MODE */}
      <section className="h-screen font-poppins bg-ngaos-4">
        <div className="px-4">
          <h1 className="font-bold text-white pt-7 text-head-2">
            History Transaksi
          </h1>
        </div>
        <BottomNavbar />
      </section>
      {/* MOBILE MODE */}
    </>
  );
}
