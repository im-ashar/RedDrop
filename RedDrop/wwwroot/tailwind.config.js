/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '../**/*.{razor,html,cshtml}',
        './**/*.js',
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    plugins: [
        require("tw-elements/dist/plugin.cjs"),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('kutty'),
    ],
    theme: {
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
            body: ["Roboto", "sans-serif"],
            mono: ["ui-monospace", "monospace"],
        },
        colors: {
            "main": "#CC1B1B",
            "white":"FFFFFF",
        }
    },
    darkMode: "class",
};