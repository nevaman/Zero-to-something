/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fgPrimary: '#E6EDF3',
        fgMuted: '#9AA7B2',
      },
    },
  },
  plugins: [],
}
