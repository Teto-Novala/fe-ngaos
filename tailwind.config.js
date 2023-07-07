/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "ngaos-1": "#84A7A1",
                "ngaos-2": "#2E8A99",
                "ngaos-3": "#1F6E8C",
                "ngaos-4": "#0E2954",
            },
            fontFamily: {
                poppins: ["var(--font-poppins)"],
            },
        },
    },
    plugins: [require("daisyui")],
};
