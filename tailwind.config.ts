
import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				ocean: {
					deep: '#0a2135',
					dark: '#0e3550',
					medium: '#1a5783',
					light: '#2c7bb6',
					surface: '#122f45',
				},
				gold: {
					light: '#f0d6a3',
					DEFAULT: '#d4af37',
					dark: '#a38629',
				},
				ice: {
					light: '#e8f4ff',
					DEFAULT: '#c5e4ff',
					dark: '#9bbfdf',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'wave': {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'50%': { transform: 'translateX(-25%) translateY(15px)' },
					'100%': { transform: 'translateX(0) translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1', boxShadow: '0 0 20px 5px rgba(44, 123, 182, 0.3)' },
					'50%': { opacity: '0.7', boxShadow: '0 0 40px 10px rgba(44, 123, 182, 0.5)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'wave': 'wave 8s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'fade-in-up': 'fade-in-up 0.5s ease-out forwards'
			},
			fontFamily: {
				'sf-pro': ['SF Pro Display', 'system-ui', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
			},
			backgroundImage: {
				'ocean-gradient': 'linear-gradient(to bottom, #0a2135, #0e3550, #122f45)',
				'gold-shimmer': 'linear-gradient(90deg, #a38629, #d4af37, #f0d6a3, #d4af37, #a38629)',
				'glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
				'button-gradient': 'linear-gradient(90deg, #1a5783, #2c7bb6, #1a5783)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
