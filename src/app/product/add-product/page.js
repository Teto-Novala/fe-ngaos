"use client";

//core
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import Image from "next/image";

//third parties
import { useSession } from "next-auth/react";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";

//redux
//---

//components
import Label from "@/components/Label";
import Input from "@/components/Input";
import Button from "@/components/Button";

//utils
import { IMG_PLACEHOLDER, PRODUCT_URL } from "@/apis/api";

export default function AddProduct() {
    //core
    const router = useRouter();
    const session = useSession();
    let token = session?.data?.user?.token;

    //state
    const fileRef = useRef();
    const [showImage, setShowImage] = useState(IMG_PLACEHOLDER(200));
    const [product, setProduct] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        image: null,
    });

    //func
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleChangeImage = () => {
        const image = fileRef.current.files[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            setShowImage(reader.result);
            setProduct({ ...product, image: image });
        });

        reader.readAsDataURL(image);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (
                !product.name ||
                !product.description ||
                !product.category ||
                !product.price ||
                !product.image
            ) {
                alert("Penuhi semua form!");
                return;
            }

            if (token) {
                const res = await axios.post(
                    PRODUCT_URL("add"),
                    {
                        name: product.name,
                        description: product.description,
                        category: product.category,
                        price: product.price,
                        image: product.image,
                    },
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (
                    res?.status == 201 ||
                    res?.data?.status?.toLowerCase() == "success"
                ) {
                    alert("Sukses Menambah Data!");
                    setProduct({
                        name: "",
                        description: "",
                        category: "",
                        price: "",
                        image: null,
                    });
                    setShowImage(IMG_PLACEHOLDER(200));
                }
                // console.log("ADD DATA", res);
            }
        } catch (error) {
            console.log("ERROR ADD DATA", error);
        }
    };

    //effects

    return (
        <>
            {/* MOBILE MODE */}
            <section className="h-screen lg:hidden font-poppins">
                <div className="px-4">
                    <div
                        onClick={() => router.back()}
                        className="fixed inset-x-0 top-0  flex cursor-pointer items-center gap-6 bg-ngaos-4  px-[16px] py-[10px] text-white "
                    >
                        <FiArrowLeft className="h-[30px] w-[30px]" />{" "}
                        <h1>Tambah Produk</h1>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-[80px] flex flex-col gap-2"
                    >
                        {/* nama produk */}
                        <div className="flex flex-col gap-1">
                            <Label>Nama Produk</Label>
                            <Input
                                name={"name"}
                                value={product.name}
                                placeholder={"Nama Produk"}
                                onChange={handleChange}
                            />
                        </div>
                        {/* nama produk */}

                        {/* penjelasan produk */}
                        <div className="flex flex-col gap-1">
                            <Label htmlFor={"alamat"}>Penjelasan Produk</Label>
                            <textarea
                                value={product.description}
                                name={"description"}
                                onChange={handleChange}
                                id="alamat"
                                className=" border-net-2  rounded-rad-4 textarea focus:outline-none focus:border-ngaos-4"
                                placeholder="Penjelasan Produk"
                            ></textarea>
                        </div>
                        {/* penjelasan produk */}

                        {/* kategori produk */}
                        <div className="flex flex-col gap-1">
                            <Label>Kategori Produk</Label>
                            <Input
                                value={product.category}
                                name={"category"}
                                onChange={handleChange}
                                placeholder={"Kategori Produk"}
                            />
                        </div>
                        {/* kategori produk */}

                        {/* harga produk */}
                        <div className="flex flex-col gap-1">
                            <Label>Harga Produk</Label>
                            <Input
                                value={product.price}
                                onChange={handleChange}
                                type="number"
                                name={"price"}
                                placeholder={"Harga Produk"}
                            />
                        </div>
                        {/* harga produk */}

                        {/* gambar produk */}
                        <div className="flex flex-col gap-1">
                            <Label>Gambar Produk</Label>
                            <Image
                                alt=""
                                src={showImage}
                                width={200}
                                height={200}
                            />
                            <input
                                ref={fileRef}
                                type="file"
                                onChange={handleChangeImage}
                                placeholder={"Gambar Produk"}
                                className="rounded-rad-4 border-net-2 px-6 py-[14px] text-body-6 font-normal focus:border-ngaos-4 w-full cursor-pointer appearance-none border font-poppins outline-none"
                            />
                        </div>
                        {/* gambar produk */}

                        {/* button  */}
                        <div className="mt-5">
                            <Button type="submit">Tambah Produk</Button>
                        </div>
                        {/* button */}
                    </form>
                    {/* divider */}
                    <div className="invisible h-[100px]"></div>
                    {/* divider */}
                </div>
            </section>
            {/* MOBILE MODE */}
        </>
    );
}
