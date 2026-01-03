import animatePlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html'
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'blaze-indigo': {
          '50': '#f0f5ff',
          '100': '#e0eaff',
          '200': '#c8d9ff',
          '300': '#a7c1ff',
          '400': '#8daaff',
          '500': '#728dff',
          '600': '#596eff',
          '700': '#4757ff',
          '800': '#3846e0',
          '900': '#2f3ab3',
          '950': '#1e247a',
        },
        'blaze-violet': {
          '50': '#f6f5ff',
          '100': '#edeaff',
          '200': '#dcd7ff',
          '300': '#c5bfff',
          '400': '#ac9eff',
          '500': '#957bff',
          '600': '#8155f8',
          '700': '#7243e3',
          '800': '#5e36bf',
          '900': '#4e2d9c',
          '950': '#2d1a6c',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'blaze-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'blaze-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'blaze-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'blaze-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'blaze-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        input: "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "glitch-1": {
          "0%": { "clip-path": "inset(20% 0 80% 0)", transform: "translate(-2px, 2px)" },
          "20%": { "clip-path": "inset(60% 0 10% 0)", transform: "translate(2px, -2px)" },
          "40%": { "clip-path": "inset(40% 0 50% 0)", transform: "translate(-2px, 2px)" },
          "60%": { "clip-path": "inset(80% 0 5% 0)", transform: "translate(2px, -2px)" },
          "80%": { "clip-path": "inset(10% 0 60% 0)", transform: "translate(-2px, 2px)" },
          "100%": { "clip-path": "inset(30% 0 30% 0)", transform: "translate(2px, -2px)" },
        },
        "glitch-2": {
          "0%": { "clip-path": "inset(10% 0 60% 0)", transform: "translate(2px, -2px)" },
          "20%": { "clip-path": "inset(30% 0 20% 0)", transform: "translate(-2px, 2px)" },
          "40%": { "clip-path": "inset(70% 0 10% 0)", transform: "translate(2px, -2px)" },
          "60%": { "clip-path": "inset(20% 0 50% 0)", transform: "translate(-2px, 2px)" },
          "80%": { "clip-path": "inset(50% 0 30% 0)", transform: "translate(2px, -2px)" },
          "100%": { "clip-path": "inset(10% 0 80% 0)", transform: "translate(-2px, 2px)" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glitch-1": "glitch-1 2s infinite linear alternate-reverse",
        "glitch-2": "glitch-2 2s infinite linear alternate-reverse",
        aurora: "aurora 60s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;