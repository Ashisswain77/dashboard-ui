export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f5f2f1",
        soft: "#f3f3f3",
        accent: "#ff4d6d",
        accentSoft: "#ffe6eb",
      },
      borderRadius: {
        xl: "24px",
        lg: "16px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
