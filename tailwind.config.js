/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    darkMode: false,
    extend: {
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    minHeight: {
      home: "78vh",
    },
    variants: {
      borderColor: ["responsive", "hover", "focus", "focus-within"],
    },
    screens: {
      xxs: "280",
      xs: "360px",
      sm: "640px",
      md: "768px",
      std: "950px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
    colors: {
      orange: "#e87c03",
      green: "#01B00D",
      nwred: "#e50914",
      black: "#000",
      black_body: "#141414",
      grey: "#333",
      gray_50: "#f9fafb",
      gray_100: "#f3f4f6",
      gray_200: "#e5e7eb",
      gray_300: "#cbd5e1",
      gray_400: "#94a3b8",
      gray_500: "#64748b",
      gray_600: "#475569",
      gray_700: "#334155",
      gray_800: "#1F2937",
      gray_900: "#111827",
      gray_login: "#737373",
      white: "#fff",
      login_btn_color: "#e50914",
      blue: "#3B82F6",
    },
  },
  plugins: [],
};
