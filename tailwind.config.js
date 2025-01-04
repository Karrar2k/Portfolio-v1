/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // If you’re using Next.js App Router (13+):
    "./src/app/**/*.{js,ts,jsx,tsx}",
    // If you have a components folder:
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // If you happen to have a pages folder (old router) or other directories:
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
