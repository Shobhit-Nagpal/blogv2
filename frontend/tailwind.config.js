/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "white": "#f5fafb",
                "grey": "#808080",
                "blue": "#2d6ad9",
                "red": "#ff0000",
                "green": "#00ff00",
                "black": "#121212"
            }
        },
    },
    plugins: [],
}

