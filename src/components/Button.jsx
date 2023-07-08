"use client";

export default function Button({
    className = "w-full rounded-rad-4 bg-ngaos-4 px-6 py-[14px] text-body-6 font-medium text-white hover:bg-ngaos-2",
    children,
    ...props
}) {
    return (
        <>
            <button {...props} className={`${className}`}>
                {children}
            </button>
        </>
    );
}
