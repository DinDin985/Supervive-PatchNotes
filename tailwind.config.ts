import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import type { PluginAPI, PluginUtils } from "tailwindcss/types/config";

const config: Config = {
  mode: "jit",
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
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
        "navbar-texture": "url('/nav-bar/header-sidemenu.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "ui-light-purple": "#9724F0",
        "ui-dark-purple": "#34025B",
      },
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        "tusker-5700": ["Tusker-5700", "sans-serif"],
        "tusker-6700": ["Tusker-6700", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      screens: {
        xs: "360px",
      },
      typography: ({ theme }: PluginUtils) => ({
        DEFAULT: {
          css: {
            a: { color: theme("colors.blue.400") },
            h1: { color: "colors.white", margin: theme("spacing.0") },
            h2: { color: "colors.white", margin: theme("spacing.0") },
            h3: { color: "colors.white", margin: theme("spacing.0") },
            h4: { color: "colors.white", margin: theme("spacing.0") },
            h5: { color: "colors.white", margin: theme("spacing.0") },
            h6: { color: "colors.white", margin: theme("spacing.0") },
            img: {
              margin: theme("spacing.0"),
            },
            p: { color: "colors.white", margin: theme("spacing.0") },
            strong: {
              color: "colors.white",
              fontWeight: theme("fontWeight.bold"),
            },
            ul: {
              li: {
                color: theme("colors.white"),
                paddingLeft: theme("spacing.0"),
                margin: theme("spacing.0"),
              },
              lineHeight: theme("lineHeight.6"),
              paddingLeft: theme("spacing.6"),
              marginTop: theme("spacing.0"),
            },
          },
        },
        "news-content": {
          css: {
            h1: {
              fontFamily: "'Quicksand', sans-serif",
              fontSize: theme("fontSize.2xl"),
              marginBottom: theme("spacing.8"),
              "@screen md": {
                fontSize: theme("fontSize.3xl"),
              },
            },
            h2: {
              fontFamily: "'Quicksand', sans-serif",
              fontSize: theme("fontSize.xl"),
              marginBottom: theme("spacing.4"),
              "@screen md": {
                fontSize: theme("fontSize.2xl"),
              },
            },
            img: {
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: theme("spacing.8"),
              marginTop: theme("spacing.8"),
              maxHeight: "500px",
            },
            p: {
              marginBottom: theme("spacing.2"),
              lineHeight: theme("lineHeight.6"),
              "@screen md": {
                fontSize: theme("fontSize.lg"),
                marginBottom: theme("spacing.4"),
              },
            },
          },
        },
        "patch-custom": {
          css: {
            p: {
              marginBottom: theme("spacing.4"),
              lineHeight: theme("lineHeight.6"),
            },
          },
        },
        "patch-equipment-changes": {
          css: {
            h2: {
              fontSize: theme("fontSize.xl"),
              fontWeight: theme("fontWeight.bold"),
              marginBottom: theme("spacing.4"),
              "@screen md": {
                fontSize: theme("fontSize.2xl"),
              },
              "@screen lg": {
                fontSize: theme("fontSize.3xl"),
              },
            },
            h3: {
              fontSize: theme("fontSize.sm"),
              fontWeight: theme("fontWeight.light"),
              "@screen md": {
                fontSize: theme("fontSize.base"),
              },
              "@screen lg": {
                marginBottom: theme("spacing.4"),
              },
            },
            h4: {
              color: theme("colors.neutral.300"),
              fontSize: theme("fontSize.sm"),
              fontWeight: theme("fontWeight.light"),
              marginBottom: theme("spacing.0"),
              "@screen md": {
                fontSize: theme("fontSize.base"),
              },
              "@screen lg": {
                fontSize: theme("fontSize.base"),
              },
            },
          },
        },
        "patch-highlights": {
          css: {
            p: {
              lineHeight: theme("lineHeight.6"),
            },
          },
        },
        "patch-hunter-ability-changes": {
          css: {},
        },
        "patch-hunter-changes": {
          css: {
            h2: {
              fontSize: theme("fontSize.xl"),
              fontStyle: theme("fontWeight.bold"),
              marginBottom: theme("spacing.4"),
              "@screen md": {
                fontSize: theme("fontSize.2xl"),
              },
              "@screen lg": {
                fontSize: theme("fontSize.4xl"),
              },
            },
            h3: {
              fontSize: theme("fontSize.sm"),
              fontWeight: theme("fontWeight.light"),
              display: "none",
              "@screen md": {
                fontSize: theme("fontSize.base"),
              },
              "@screen lg": {
                display: "block",
                marginBottom: theme("spacing.4"),
              },
            },
            h4: {
              color: theme("colors.neutral.300"),
              fontSize: theme("fontSize.sm"),
              fontWeight: theme("fontWeight.light"),
              marginBottom: theme("spacing.0"),
              "@screen md": {
                fontSize: theme("fontSize.base"),
              },
              "@screen lg": {
                fontSize: theme("fontSize.base"),
                marginBottom: theme("spacing.4"),
              },
            },
          },
        },
        "patch-hunter-intro": {
          css: {},
        },
        "patch-introduction": {
          css: {
            h1: {
              fontFamily: "'Tusker-6700', sans-serif",
              fontSize: theme("fontSize.4xl"),
              fontStyle: "italic",
              letterSpacing: theme("letterSpacing.wider"),
              marginBottom: theme("spacing.4"),
              "@screen lg": {
                fontSize: theme("fontSize.5xl"),
              },
            },
            h2: {
              color: theme("colors.neutral.300"),
              fontFamily: "Arial",
              fontSize: theme("fontSize.lg"),
              marginBottom: theme("spacing.1"),
            },
            h3: {
              color: theme("colors.white"),
              fontFamily: "'Quicksand', sans-serif",
              fontSize: theme("fontSize.sm"),
              marginBottom: theme("spacing.6"),
            },
          },
        },
        "patch-power-changes": {
          css: {
            h2: {
              fontSize: theme("fontSize.xl"),
              fontStyle: theme("fontWeight.bold"),
              marginBottom: theme("spacing.4"),
              "@screen md": {
                fontSize: theme("fontSize.2xl"),
              },
              "@screen lg": {
                fontSize: theme("fontSize.4xl"),
              },
            },
            h3: {
              fontSize: theme("fontSize.sm"),
              fontWeight: theme("fontWeight.light"),
              "@screen md": {
                fontSize: theme("fontSize.base"),
              },
              "@screen lg": {
                marginBottom: theme("spacing.4"),
              },
            },
            h4: {
              color: theme("colors.neutral.300"),
              fontSize: theme("fontSize.sm"),
              fontWeight: theme("fontWeight.light"),
              marginBottom: theme("spacing.0"),
              "@screen md": {
                fontSize: theme("fontSize.base"),
              },
              "@screen lg": {
                fontSize: theme("fontSize.base"),
              },
            },
          },
        },
        "patch-summary": {
          css: {
            p: {
              lineHeight: theme("lineHeight.6"),
            },
          },
        },
        "patch-system-changes": {
          css: {
            p: {
              marginBottom: theme("spacing.4"),
              lineHeight: theme("lineHeight.6"),
            },
            h2: {
              marginBottom: theme("spacing.2"),
              fontFamily: theme("fontFamily.tusker"),
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.bold"),
              "@screen lg": {
                fontSize: theme("fontSize.4xl"),
              },
            },
          },
        },
      }),
      variant: {},
    },
  },
  plugins: [
    tailwindcssAnimate,
    typography,
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
