/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary_color: "#b9ff66",
            black_color: "#191a23",
            grey_color: "#f3f3f3"
        },
        fontFamily: {
            grotesk:['Space Grotesk', 'sans-serif']
        },
        extend: {},
    },
    plugins: [],
}

