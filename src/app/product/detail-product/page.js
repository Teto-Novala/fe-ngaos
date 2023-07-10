"use client";

//core
import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

//third parties
import { useSession } from "next-auth/react";
import axios from "axios";

//components
import Input from "@/components/Input";
import Button from "@/components/Button";
import Label from "@/components/Label";

//apis
import { PRODUCT_URL, IMG_PLACEHOLDER } from "@/apis/api";
import { FiArrowLeft } from "react-icons/fi";

//utils

export default function DetailProduct() {
    //core
    const router = useRouter();
    const session = useSession();
    const idProduct = useSearchParams().get("product");
    let token = session?.data?.user?.token;

    //state
    const fileRef = useRef();
    const [showImage, setShowImage] = useState(IMG_PLACEHOLDER(200));
    const [fetchData, setFetchData] = useState(true);
    const [changeData, setChangeData] = useState(false);
    const [detailProduct, setDetailProduct] = useState({
        name: "",
        image: "",
        price: "",
        category: "",
        description: "",
    });

    //func
    const handleChange = (e) => {
        setDetailProduct({ ...detailProduct, [e.target.name]: e.target.value });
    };

    const handleChangeImage = () => {
        const image = fileRef.current.files[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            setShowImage(reader.result);
            setDetailProduct({
                ...detailProduct,
                image: image,
            });
        });

        reader.readAsDataURL(image);
    };

    const updateProduct = async () => {
        if (token) {
            try {
                const res = await axios.put(
                    PRODUCT_URL("update", idProduct),
                    {
                        name: detailProduct.name,
                        image: detailProduct.image && detailProduct.image,
                        price: detailProduct.price,
                        category: detailProduct.category,
                        description: detailProduct.description,
                    },
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                console.log("UPDATE DATA", res);
                setFetchData(true);
                setChangeData(false);
            } catch (error) {
                console.log("ERROR UPDATE DATA", error);
            }
        }
    };

    // effect
    useEffect(() => {
        if (token) {
            if (fetchData) {
                const fetchDetailProductData = async () => {
                    try {
                        const res = await axios.get(
                            PRODUCT_URL("getbyid", idProduct),
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        );
                        setDetailProduct({
                            name: res?.data?.data?.name,
                            category: res?.data?.data?.category,
                            description: res?.data?.data?.description,
                            price: res?.data?.data?.price,
                        });
                        setShowImage(res?.data?.data?.image);

                        // console.log("ALL Detail PRODUCT", res.data.data);
                    } catch (error) {}
                };
                fetchDetailProductData();
                setFetchData(false);
            }
        }
    }, [token, idProduct, fetchData]);

    console.log("===DEBUG DETAIL PRODUCT=================");
    // console.log("DETAIL PRODUCT", detailProduct);
    console.log("===DEBUG DETAIL PRODUCT=================");

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
                        <h1>Detail Produk</h1>
                    </div>

                    <div className="mt-[80px] flex flex-col gap-2">
                        {/* nama produk */}
                        <div className="flex flex-col gap-1">
                            <Label>Nama Produk</Label>
                            <Input
                                name={"name"}
                                disabled={!changeData}
                                value={detailProduct.name}
                                placeholder={"Nama Produk"}
                                onChange={handleChange}
                            />
                        </div>
                        {/* nama produk */}

                        {/* penjelasan produk */}
                        <div className="flex flex-col gap-1">
                            <Label htmlFor={"alamat"}>Penjelasan Produk</Label>
                            <textarea
                                value={detailProduct.description}
                                name={"description"}
                                disabled={!changeData}
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
                                disabled={!changeData}
                                value={detailProduct.category}
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
                                disabled={!changeData}
                                value={detailProduct.price}
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
                                disabled={!changeData}
                                onChange={handleChangeImage}
                                placeholder={"Gambar Produk"}
                                className="rounded-rad-4 border-net-2 px-6 py-[14px] text-body-6 font-normal focus:border-ngaos-4 w-full cursor-pointer appearance-none border font-poppins outline-none"
                            />
                        </div>
                        {/* gambar produk */}

                        {/* button  */}
                        <div className="mt-5">
                            <div className="flex gap-2 w-full">
                                {!changeData ? (
                                    <Button
                                        onClick={() => setChangeData(true)}
                                        className="w-full rounded-rad-3 bg-ngaos-6 px-11 py-3 text-white"
                                    >
                                        Ubah Produk
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => updateProduct()}
                                        className="w-full rounded-rad-3 bg-ngaos-2 px-11 py-3 text-white"
                                    >
                                        Simpan
                                    </Button>
                                )}

                                {changeData && (
                                    <Button
                                        onClick={() => {
                                            setChangeData(false);
                                            setFetchData(true);
                                        }}
                                        className="w-full rounded-rad-3 bg-ngaos-5 px-11 py-3 text-white"
                                    >
                                        Batal
                                    </Button>
                                )}
                            </div>
                        </div>
                        {/* button */}
                    </div>
                    {/* divider */}
                    <div className="invisible h-[100px]"></div>
                    {/* divider */}
                </div>
            </section>
            {/* MOBILE MODE */}
        </>
    );
}
