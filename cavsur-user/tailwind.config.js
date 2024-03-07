/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                service: 'url(./src/img/img1.jpg)',
            }
        },
    },
    plugins: [],
};
