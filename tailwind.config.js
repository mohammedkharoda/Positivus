/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '5rem',
              '2xl': '6rem',
            },
          },
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

