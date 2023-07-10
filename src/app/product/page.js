"use client";

//core
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

//third parties
import axios from "axios";
import { useSession } from "next-auth/react";

//redux

//components
import BottomNavbar from "@/components/BottomNavbar";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Button from "@/components/Button";

//apis
import { PRODUCT_URL } from "@/apis/api";

//utils
import { formatRupiah } from "@/utils/formatRupiah";

export default function Product() {
    //core
    const session = useSession();
    const router = useRouter();
    let token = session?.data?.user?.token;

    //state
    const [fetchData, setFetchData] = useState(true);
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    const handleSearch = (e) => {
        const filteredProduct = products?.filter((product) =>
            product.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        // console.log("fitler", filteredProduct);
        setFilterProducts(filteredProduct);
    };

    const handleDetail = (idProduct) => {
        router.push(`/product/detail-product?product=${idProduct}`);
    };

    const handleDelete = async (idProduct) => {
        if (token) {
            try {
                const res = await axios.delete(
                    PRODUCT_URL("delete", idProduct),
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setFetchData(true);
                console.log("DELETE PRODUCT", res);
                // console.log(" EROR DELETE PRODUCT", res);
            } catch (error) {
                console.log(" EROR DELETE PRODUCT", res);
            }
        }
    };

    //effetcs
    useEffect(() => {
        if (token) {
            if (fetchData) {
                const fetchDataProduct = async () => {
                    try {
                        const res = await axios.get(PRODUCT_URL("getall"), {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                        setProducts(res.data.data);
                        setFilterProducts(res.data.data);
                        // console.log("ALL PRODUCT", res);
                    } catch (error) {}
                };
                fetchDataProduct();
                setFetchData(false);
            }
        }
    }, [token, fetchData]);

    // console.log("================DEBUG PRODUCT=================");
    // console.log("ALL PRODUCT", products);
    // console.log("================DEBUG PRODUCT=================");

    return (
        <>
            {/* MOBILE MODE */}
            <section className="h-screen lg:hidden font-poppins">
                {/* content */}
                <div className="px-4">
                    <h1 className="font-bold pt-7 text-head-2 text-ngaos-4">
                        Manajemen Produk
                    </h1>

                    <div className="grid grid-cols-12 mt-5 gap-5">
                        <Input
                            name="search"
                            // value={search}
                            onChange={handleSearch}
                            placeholder={"Cari Produk"}
                            className="col-span-8 py-2 px-5 rounded-rad-4"
                        />
                        <Button
                            onClick={() => router.push("/product/add-product")}
                            className=" rounded-rad-4 py-2 col-span-4 bg-ngaos-4 text-white px-3 "
                        >
                            Tambah
                        </Button>
                    </div>

                    <div className="flex flex-col mt-8 gap-5">
                        {filterProducts?.length ? (
                            filterProducts.map((product, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="rounded-rad-2 shadow-low grid grid-cols-12"
                                    >
                                        <Image
                                            alt=""
                                            src={product.image}
                                            width={140}
                                            height={140}
                                            className="col-span-5 "
                                        />

                                        <div className="col-span-7 w-full flex flex-col justify-between gap-3">
                                            <div className="px-1 flex flex-col gap-1">
                                                <h1 className="text-title-3 font-bold text-ngaos-4">
                                                    {product.name}
                                                </h1>
                                                <div>
                                                    <p>
                                                        jenis :{" "}
                                                        {product.category}
                                                    </p>
                                                    <p className="text-ngaos-5 font-bold">
                                                        Harga :{" "}
                                                        {formatRupiah(
                                                            product.price
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="w-full px-5 flex flex-col gap-2 pb-2">
                                                <Button
                                                    onClick={() =>
                                                        handleDetail(product.id)
                                                    }
                                                    className="text-body-6 bg-ngaos-4 text-white w-full rounded-rad-2 py-1"
                                                >
                                                    Detail
                                                </Button>
                                                <Button
                                                    onClick={() =>
                                                        handleDelete(product.id)
                                                    }
                                                    className=" text-body-6 bg-ngaos-5 text-white w-full rounded-rad-2 py-1"
                                                >
                                                    Hapus
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div>
                                <h1>Tidak Ada Produk!</h1>
                            </div>
                        )}
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
