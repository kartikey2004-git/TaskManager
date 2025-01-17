/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customCyan: {
          100: '#ccfdfd', // Lighter shade of #0ef
          200: '#99fbfb',
          300: '#66f9f9',
          400: '#33f7f7',
          500: '#0ef',     // Base #0ef color
          600: '#00cccc',
          700: '#009999',
          800: '#006666',
          900: '#003333', // Darker shade of #0ef
        },
        boxShadow: {
            'custom-light': '0 0 5px #0ef',
            'custom-dark': '0 0 25px #0ef',
        }
      },
    },
  },
  plugins: [],
};

