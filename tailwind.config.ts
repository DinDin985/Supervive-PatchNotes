import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      animation: {
        fadeOut: "fadeOut .25s ease-in-out forwards",
        fadeIn: "fadeIn .25s ease-in-out forwards",
        rotateTopBar: "rotateTopBar .25s ease-in-out forwards",
        reverseRotateTopBar: "reverseRotateTopBar .25s ease-in-out forwards",
        rotateMiddleBar: "rotateMiddleBar .25s ease-in-out forwards",
        reverseRotateMiddleBar:
          "reverseRotateMiddleBar .25s ease-in-out forwards",
        shine: "shine 3s ease-in-out infinite",
        slideLeft: "slideLeft 500ms ease-in-out forwards",
        slideRight: "slideRight 500ms ease-in-out forwards",
        slideUp: "slideUp .17s ease-out forwards",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotateTopBar: {
          "100%": {
            transform: "rotate(-30deg)",
            transformOrigin: "100% 100%",
            width: "65%",
            top: "9px",
            right: "10px",
          },
        },
        reverseRotateTopBar: {
          "0%": {
            transform: "rotate(-30deg)",
            transformOrigin: "100% 100%",
            width: "65%",
            top: "9px",
            right: "10px",
          },
          "100%": {
            transform: "rotate(0deg)",
            transformOrigin: "100% 100%",
            width: "57.5%",
            top: "10px",
            right: "10px",
          },
        },
        rotateMiddleBar: {
          "100%": {
            width: "65%",
            transform: "rotate(30deg)",
          },
        },
        reverseRotateMiddleBar: {
          "0%": {
            width: "65%",
            transform: "rotate(30deg)",
          },
          "100%": {
            width: "57.5%",
            transform: "rotate(0deg)",
          },
        },
        shine: {
          "0%": {
            left: "-200px",
          },
          "20%": {
            left: "100%",
          },
          "100%": {
            left: "100%",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        slideRight: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        slideUp: {
          "0%": {
            transform: "translate(0%,200%)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0%,0%)",
            opacity: "1",
          },
        },
      },
      backgroundImage: {
        "footer-texture": "url('/footer/footer_gradient_noblack.png')",
      },
      clipPath: {
        header:
          "polygon(0 0, 0 calc(100% - 15px), 190px 100%, 250px calc(100% - 40px), 290px calc(100% - 20px), 100% calc(100% - 20px), 100% 0)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        pink: "#F934D0",
        "neon-mint": "#29E7B1",
        "neon-purple": "#9724f0",
        "neon-purple-lighter": "#9724f0",
        "ui-light-grey": "#555555",
      },
      fontFamily: {
        "tusker-5700": ["Tusker-5700", "sans-serif"],
        "tusker-6700": ["Tusker-6700", "sans-serif"],
      },
      screens: {
        xs: "360px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function ({ addUtilities, theme }: PluginAPI) {
      const newUtilities: Record<string, { clipPath: string }> = {};
      Object.keys(theme("clipPath")).forEach((key) => {
        newUtilities[`.clip-${key}`] = {
          clipPath: theme(`clipPath.${key}`) as string,
        };
      });
      addUtilities(newUtilities);
    },
  ],
};
export default config;
