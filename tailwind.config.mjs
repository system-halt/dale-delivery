/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
    	extend: {
    		colors: {
    			primary: {
    				'50': '#2467a6',
    				'100': '#ffedd5',
    				'200': '#fed7aa',
    				'300': '#fdba74',
    				'400': '#fb923c',
    				'500': '#f97316',
    				'600': '#ea580c',
    				'700': '#c2410c',
    				'800': '#9a3412',
    				'900': '#7c2d12',
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				'50': '#f0f9ff',
    				'100': '#e0f2fe',
    				'200': '#bae6fd',
    				'300': '#7dd3fc',
    				'400': '#38bdf8',
    				'500': '#0ea5e9',
    				'600': '#0284c7',
    				'700': '#0369a1',
    				'800': '#075985',
    				'900': '#0c4a6e',
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			neutral: {
    				'50': '#fafafa',
    				'100': '#f5f5f5',
    				'200': '#e5e5e5',
    				'300': '#d4d4d4',
    				'400': '#a3a3a3',
    				'500': '#737373',
    				'600': '#525252',
    				'700': '#404040',
    				'800': '#262626',
    				'900': '#171717'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		backgroundImage: {
    			'header-gradient': 'linear-gradient(to right, #ff3d00 0%, #ff3d00 5%, #ff7f00 100%)'
    		},
    		fontFamily: {
    			sans: [
    				'Inter',
    				'system-ui',
    				'sans-serif'
    			],
    			display: [
    				'Poppins',
    				'system-ui',
    				'sans-serif'
    			]
    		},
    		spacing: {
    			'18': '4.5rem',
    			'88': '22rem',
    			'120': '30rem'
    		},
    		borderRadius: {
    			'4xl': '2rem',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		animation: {
    			'fade-in': 'fadeIn 0.6s ease-out',
    			'fade-in-up': 'fadeInUp 0.8s ease-out',
    			'slide-in-left': 'slideInLeft 0.8s ease-out',
    			'slide-in-right': 'slideInRight 0.8s ease-out',
    			'bounce-subtle': 'bounceSubtle 2s infinite',
    			float: 'float 3s ease-in-out infinite'
    		},
    		keyframes: {
    			fadeIn: {
    				'0%': {
    					opacity: '0'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			},
    			fadeInUp: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(30px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			slideInLeft: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(-30px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			slideInRight: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(30px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			bounceSubtle: {
    				'0%, 20%, 50%, 80%, 100%': {
    					transform: 'translateY(0)'
    				},
    				'40%': {
    					transform: 'translateY(-5px)'
    				},
    				'60%': {
    					transform: 'translateY(-3px)'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0px)'
    				},
    				'50%': {
    					transform: 'translateY(-10px)'
    				}
    			}
    		},
    		boxShadow: {
    			soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    			medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
    			strong: '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.1)'
    		}
    	}
    },
    plugins: [
        plugin(function ({addUtilities}) {
            const textShadowUtilities = {
                '.text-shadow-sm': {
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                },
                '.text-shadow-md': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                },
                '.text-shadow-lg': {
                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
                },
                '.text-shadow-3d': {
                    textShadow: '1px 1px 0px #000, 2px 2px 0px rgba(0,0,0,0.8), 3px 3px 0px rgba(0,0,0,0.6)',
                },
                '.text-shadow-hero': {
                    textShadow: '3px 3px 0px rgba(0,0,0,0.8), 6px 6px 0px rgba(0,0,0,0.6), 9px 9px 0px rgba(0,0,0,0.4), 0 0 20px rgba(0,0,0,0.7)',
                },
                '.text-shadow-subtitle': {
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)',
                },
                '.text-shadow-glow': {
                    textShadow: '0 0 10px rgba(255,255,255,0.5), 2px 2px 4px rgba(0,0,0,0.8)',
                },
                '.text-shadow-none': {
                    textShadow: 'none',
                },
            }

            addUtilities(textShadowUtilities)
        }),
        require("tailwindcss-animate")
    ],
};