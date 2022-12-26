/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ["'JHA Times Now'", 'Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
};

