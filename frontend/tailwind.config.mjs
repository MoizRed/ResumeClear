
//TODO : FIX PROBLEM WITH TAILWIND CSS CONFIG FILE

const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#41DE7C",
        brandSecondary: "#f59e0b",
      },
    },
  },
  plugins: [],
};

export default config;
