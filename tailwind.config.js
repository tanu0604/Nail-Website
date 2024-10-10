/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS and JSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#000080', // Add your custom color here
        customLight:'#B0E0E6'      },
        // customRed: '#CC313D', // Add your custom color here
        // customLight:'#F7C5CC'      },
    },
  },
  plugins: [],
}
