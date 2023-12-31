"use client";

export default function Input({
    className = "rounded-rad-4 outline-none border-net-2 px-6 py-[14px] text-body-6 font-normal focus:border-ngaos-4",

    type = "text",
    id,
    placeholder,
    ...rest
}) {
    return (
        <input
            {...rest}
            id={id}
            placeholder={placeholder}
            type={type}
            className={`${className} w-full cursor-pointer appearance-none border font-poppins outline-none `}
        />
    );
}
