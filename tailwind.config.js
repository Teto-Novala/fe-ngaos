/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "ngaos-1": "#84A7A1",
                "ngaos-2": "#2E8A99",
                "ngaos-3": "#1F6E8C",
                "ngaos-4": "#0E2954",
                "ngaos-5": "#EF6262",
                "ngaos-6": "#F3AA60",
            },
            fontFamily: {
                poppins: ["var(--font-poppins)"],
            },
            fontSize: {
                "body-1": ["10px", "14px"],
                "body-2": ["10px", "20px"],
                "body-3": ["12px", "18px"],
                "body-4": ["12px", "20px"],
                "body-5": ["14px", "18px"],
                "body-6": ["14px", "20px"],
                "title-1": ["16px", "20px"],
                "title-2": ["16px", "24px"],
                "title-3": ["18px", "26px"],
                "head-1": ["20px", "30px"],
                "head-2": ["24px", "36px"],
                "head-3": ["36px", "54px"],
            },
            boxShadow: {
                high: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                low: "0px 0px 4px rgba(0, 0, 0, 0.15)",
            },
            borderRadius: {
                "rad-1": "4px",
                "rad-2": "8px",
                "rad-3": "12px",
                "rad-4": "16px",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "white", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
};
