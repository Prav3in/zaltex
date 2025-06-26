import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
  		spacing: {
  			// Design System Spacing
  			'xs': '4px',   // 4px – icon padding, tight gaps
  			'sm': '8px',   // 8px – between small UI elements
  			'md': '16px',  // 16px – default padding/margin
  			'lg': '24px',  // 24px – group spacing, section gaps
  			'xl': '32px',  // 32px – section headers, hero spacing
  			'2xl': '48px', // 48px – page-wide separation
  			'3xl': '64px', // 64px – hero content, full section margins
  			'nav': '128px', // 128px – navigation clearance for fixed nav
  		},
  		fontFamily: {
  			sans: ["Inter", "system-ui", "sans-serif"],
  			mono: ["JetBrains Mono", "monospace"],
  		},
  		colors: {
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			// Brand colors for Zaltex - white and sky-blue palette
  			brand: {
  				50: "#f0f9ff",
  				100: "#e0f2fe", 
  				200: "#bae6fd",
  				300: "#7dd3fc",
  				400: "#38bdf8",
  				500: "#0ea5e9",
  				600: "#0284c7",
  				700: "#0369a1",
  				800: "#075985",
  				900: "#0c4a6e",
  				950: "#082f49",
  			},
  			// Glass morphism colors
  			glass: {
  				white: "rgba(255, 255, 255, 0.1)",
  				"white-md": "rgba(255, 255, 255, 0.2)",
  				"white-lg": "rgba(255, 255, 255, 0.3)",
  				blue: "rgba(14, 165, 233, 0.1)",
  				"blue-md": "rgba(14, 165, 233, 0.2)",
  				"blue-lg": "rgba(14, 165, 233, 0.3)",
  			},
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
  		backgroundImage: {
  			// Liquid glass gradients
  			"glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
  			"glass-gradient-blue": "linear-gradient(135deg, rgba(14,165,233,0.1), rgba(14,165,233,0.05))",
  			"liquid-glass": "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(14,165,233,0.1) 100%)",
  			// iOS-style reflection gradients
  			"reflection": "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
  			"sky-gradient": "linear-gradient(to bottom right, #f0f9ff, #e0f2fe, #bae6fd)",
  			"hero-gradient": "linear-gradient(135deg, #ffffff 0%, #f0f9ff 25%, #e0f2fe  50%, #bae6fd 75%, #7dd3fc 100%)",
  			// Dark theme gradients
  			"hero-gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)",
  			"sky-gradient-dark": "linear-gradient(to bottom right, #0f172a, #1e293b, #334155)",
  			// Dynamic CSS variable-based gradients
  			"hero-dynamic": "linear-gradient(135deg, var(--hero-gradient-start) 0%, var(--hero-gradient-mid-1) 25%, var(--hero-gradient-mid-2) 50%, var(--hero-gradient-mid-3) 75%, var(--hero-gradient-end) 100%)",
  			"animated-gradient": "linear-gradient(-45deg, var(--hero-gradient-start), var(--hero-gradient-mid-1), var(--hero-gradient-mid-2), var(--hero-gradient-mid-3), var(--hero-gradient-end))",
  		},
  		backdropBlur: {
  			xs: "2px",
  			sm: "4px",
  			md: "8px",
  			lg: "16px",
  			xl: "24px",
  			"2xl": "40px",
  			"3xl": "64px",
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)",
  			"glass": "16px",
  			"glass-lg": "24px",
  			"glass-xl": "32px",
  		},
  		boxShadow: {
  			// Glass morphism shadows
  			"glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  			"glass-sm": "0 4px 16px 0 rgba(31, 38, 135, 0.25)",
  			"glass-lg": "0 16px 64px 0 rgba(31, 38, 135, 0.45)",
  			"glass-inset": "inset 0 1px 0 0 rgba(255, 255, 255, 0.3)",
  			// iOS-style shadows
  			"ios": "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  			"ios-lg": "0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 16px 20px -12px rgba(0, 0, 0, 0.15)",
  			"glow": "0 0 20px rgba(14, 165, 233, 0.3)",
  			"glow-lg": "0 0 40px rgba(14, 165, 233, 0.4)",
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out",
  			// Liquid glass animations
  			"float": "float 6s ease-in-out infinite",
  			"float-delayed": "float 6s ease-in-out infinite 2s",
  			"shimmer": "shimmer 2s linear infinite",
  			"ripple": "ripple 0.6s ease-out",
  			"glass-morph": "glass-morph 3s ease-in-out infinite",
  			"liquid-flow": "liquid-flow 8s ease-in-out infinite",
  			"fade-in-up": "fade-in-up 0.6s ease-out",
  			"fade-in-down": "fade-in-down 0.6s ease-out",
  			"scale-in": "scale-in 0.3s ease-out",
  			"glow-pulse": "glow-pulse 2s ease-in-out infinite",
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
  			// Liquid glass keyframes
  			"float": {
  				"0%, 100%": { 
  					transform: "translateY(0px) rotate(0deg)", 
  					filter: "hue-rotate(0deg)" 
  				},
  				"33%": { 
  					transform: "translateY(-10px) rotate(120deg)", 
  					filter: "hue-rotate(120deg)" 
  				},
  				"66%": { 
  					transform: "translateY(5px) rotate(240deg)", 
  					filter: "hue-rotate(240deg)" 
  				},
  			},
  			"shimmer": {
  				"0%": { transform: "translateX(-100%)" },
  				"100%": { transform: "translateX(100%)" },
  			},
  			"ripple": {
  				"0%": { 
  					transform: "scale(0)", 
  					opacity: "1" 
  				},
  				"100%": { 
  					transform: "scale(4)", 
  					opacity: "0" 
  				},
  			},
  			"glass-morph": {
  				"0%, 100%": { 
  					borderRadius: "16px",
  					transform: "rotate(0deg)",
  				},
  				"33%": { 
  					borderRadius: "24px 16px 32px 8px",
  					transform: "rotate(1deg)",
  				},
  				"66%": { 
  					borderRadius: "8px 32px 16px 24px",
  					transform: "rotate(-1deg)",
  				},
  			},
  			"liquid-flow": {
  				"0%, 100%": { 
  					backgroundPosition: "0% 50%",
  					transform: "scale(1)",
  				},
  				"50%": { 
  					backgroundPosition: "100% 50%",
  					transform: "scale(1.02)",
  				},
  			},
  			"fade-in-up": {
  				"0%": {
  					opacity: "0",
  					transform: "translateY(20px)",
  				},
  				"100%": {
  					opacity: "1",
  					transform: "translateY(0)",
  				},
  			},
  			"fade-in-down": {
  				"0%": {
  					opacity: "0",
  					transform: "translateY(-20px)",
  				},
  				"100%": {
  					opacity: "1",
  					transform: "translateY(0)",
  				},
  			},
  			"scale-in": {
  				"0%": {
  					opacity: "0",
  					transform: "scale(0.9)",
  				},
  				"100%": {
  					opacity: "1",
  					transform: "scale(1)",
  				},
  			},
  			"glow-pulse": {
  				"0%, 100%": {
  					boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)",
  				},
  				"50%": {
  					boxShadow: "0 0 30px rgba(14, 165, 233, 0.5)",
  				},
  			},
  		},
  		// Custom utilities for glass effects
  		utilities: {
  			'.glass': {
  				background: 'rgba(255, 255, 255, 0.1)',
  				backdropFilter: 'blur(16px)',
  				border: '1px solid rgba(255, 255, 255, 0.2)',
  				boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  			},
  			'.glass-blue': {
  				background: 'rgba(14, 165, 233, 0.1)',
  				backdropFilter: 'blur(16px)',
  				border: '1px solid rgba(14, 165, 233, 0.2)',
  				boxShadow: '0 8px 32px 0 rgba(14, 165, 233, 0.37)',
  			},
  			'.liquid-border': {
  				background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(14,165,233,0.1))',
  				borderRadius: '16px',
  				padding: '1px',
  			},
  		},
  	}
  },
  plugins: [
  	require("tailwindcss-animate"),
  	// Custom plugin for glass morphism utilities
  	function({ addUtilities }: any) {
  		const newUtilities = {
  			'.glass': {
  				background: 'rgba(255, 255, 255, 0.1)',
  				backdropFilter: 'blur(16px)',
  				'-webkit-backdrop-filter': 'blur(16px)',
  				border: '1px solid rgba(255, 255, 255, 0.2)',
  				boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  			},
  			'.glass-sm': {
  				background: 'rgba(255, 255, 255, 0.08)',
  				backdropFilter: 'blur(8px)',
  				'-webkit-backdrop-filter': 'blur(8px)',
  				border: '1px solid rgba(255, 255, 255, 0.15)',
  				boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.25)',
  			},
  			'.glass-lg': {
  				background: 'rgba(255, 255, 255, 0.15)',
  				backdropFilter: 'blur(24px)',
  				'-webkit-backdrop-filter': 'blur(24px)',
  				border: '1px solid rgba(255, 255, 255, 0.25)',
  				boxShadow: '0 16px 64px 0 rgba(31, 38, 135, 0.45)',
  			},
  			'.glass-blue': {
  				background: 'rgba(14, 165, 233, 0.1)',
  				backdropFilter: 'blur(16px)',
  				'-webkit-backdrop-filter': 'blur(16px)',
  				border: '1px solid rgba(14, 165, 233, 0.2)',
  				boxShadow: '0 8px 32px 0 rgba(14, 165, 233, 0.37)',
  			},
  			'.glass-blue-lg': {
  				background: 'rgba(14, 165, 233, 0.15)',
  				backdropFilter: 'blur(24px)',
  				'-webkit-backdrop-filter': 'blur(24px)',
  				border: '1px solid rgba(14, 165, 233, 0.25)',
  				boxShadow: '0 16px 64px 0 rgba(14, 165, 233, 0.45)',
  			},
  			'.liquid-border': {
  				background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(14,165,233,0.1))',
  				borderRadius: '16px',
  				padding: '1px',
  			},
  			'.ios-reflection': {
  				position: 'relative',
  				'&::before': {
  					content: '""',
  					position: 'absolute',
  					top: '0',
  					left: '0',
  					right: '0',
  					height: '50%',
  					background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
  					borderRadius: 'inherit',
  					pointerEvents: 'none',
  				},
  			},
  		}
  		addUtilities(newUtilities)
  	},
  ],
};
export default config;
