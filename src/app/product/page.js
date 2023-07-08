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
                        Input Data Transaksi
                    </h1>
                    {/* form input */}
                    <form className="flex flex-col gap-3 mt-5 ">
                        {/* pembeli */}
                        <div className="flex flex-col gap-1">
                            <Label>Pembeli</Label>
                            <Input readOnly placeholder={"Pembeli"} />
                        </div>
                        {/* pembeli */}

                        {/* produk */}
                        <div className="flex flex-col gap-1">
                            <Label>Produk</Label>
                            <select
                                className="w-full  rounded-rad-4 border  px-6 py-[14px] text-body-6 font-normal appearance-none focus:border-ngaos-4 focus:outline-none"
                                defaultValue={"DEFAULT"}
                            >
                                <option disabled value={"DEFAULT"}>
                                    Pilih Produk
                                </option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        {/* produk */}

                        {/* alamat */}
                        <div className="flex flex-col gap-1">
                            <Label htmlFor={"alamat"}>Alamat</Label>
                            <textarea
                                id="alamat"
                                className="rounded-rad-4 textarea focus:outline-none focus:border-ngaos-4"
                                placeholder="Alamat"
                            ></textarea>
                        </div>
                        {/* alamat */}

                        {/* date */}
                        <div className="flex flex-col gap-1">
                            <Label>Tanggal Beli</Label>
                            <Input type="date" />
                        </div>
                        {/* date */}

                        {/* bukti */}
                        <div className="flex flex-col gap-1">
                            <Label>Tanggal Beli</Label>
                            <Input type="file" />
                        </div>
                        {/* bukti */}

                        {/* jumlah per/kg */}
                        <div className="flex flex-col gap-1">
                            <Label>Jumlah</Label>
                            <Input
                                type="number"
                                placeholder={"Input jumlah per/KG"}
                            />
                        </div>
                        {/* jumlah per/kg */}

                        {/* harga  */}
                        <div className="flex flex-col gap-1">
                            <Label>Jumlah harga yang dibayar</Label>
                            <Input
                                type="number"
                                placeholder={"Input jumlah harga yang dibayar"}
                            />
                        </div>
                        {/* harga  */}
                        {/* harga  */}
                        <div className="mt-5">
                            <Button>Tambah Transaksi</Button>
                        </div>
                        {/* harga  */}
                    </form>
                    {/* form input */}
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

// pembeli
// product
// alamat
// tanggal beli
// bukti
// jumlah per kg
// harga
