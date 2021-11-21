module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                Inter: ["Inter", "sans-serif"],
            },

            colors: {
                toggle: "hsl(230, 22%, 74%)",
                "lime-green": "hsl(163, 72%, 41%)",
                "bright-red": "hsl(356, 69%, 56%)",

                "very-dark-blue-1": "hsl(230, 17%, 14%)",
                "very-dark-blue-2": "hsl(232, 19%, 15%)",
                "dark-desaturated-blue": "hsl(228, 28%, 20%)",
                "desaturated-blue": "hsl(228, 34%, 66%)",

                "very-pale-blue": "hsl(225, 100%, 98%)",
                "light-grayish-blue": "hsl(227, 47%, 96%)",
                "dark-grayish-blue": "hsl(228, 12%, 44%)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
