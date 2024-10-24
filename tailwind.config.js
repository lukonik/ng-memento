/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // preflight: false,
  },
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        divider: '#d1d5db',
      },
    },
  },
  plugins: [],
};
