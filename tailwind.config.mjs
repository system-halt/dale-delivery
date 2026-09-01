/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
    	extend: {
    		colors: {
    			brand: {
    				orange: {
    					DEFAULT: '#FE7F01',
    					'50': '#fff8f1',
    					'100': '#ffeedb',
    					'200': '#ffd9b3',
    					'300': '#ffbc7a',
    					'400': '#ff9a33',
    					'500': '#FE7F01',
    					'600': '#e57200',
    					'700': '#c95f00',
    					'800': '#9f4b00',
    					'900': '#7f3c00',
    				},
    				blue: {
    					DEFAULT: '#004B95',
    					'50': '#f0f7ff',
    					'100': '#e0effe',
    					'200': '#b9dffe',
    					'300': '#7cc4fd',
    					'400': '#38a5f8',
    					'500': '#2563EB',
    					'600': '#004B95',
    					'700': '#003B75',
    					'800': '#002E5C',
    					'900': '#002447',
    				}
    			},
    			dark: {
    				bg: '#070A12',
    				surface: '#0D1322',
    				card: '#121A2D',
    				'card-hover': '#16223B',
    				border: '#1E2C4A',
    				'border-light': '#2D3F68',
    				muted: '#8B9BB4'
    			},
    			primary: {
    				'50': '#fff8f1',
    				'100': '#ffeedb',
    				'200': '#ffd9b3',
    				'300': '#ffbc7a',
    				'400': '#ff9a33',
    				'500': '#FE7F01',
    				'600': '#e57200',
    				'700': '#c95f00',
    				'800': '#9f4b00',
    				'900': '#7f3c00',
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				'50': '#f0f7ff',
    				'100': '#e0effe',
    				'200': '#b9dffe',
    				'300': '#7cc4fd',
    				'400': '#38a5f8',
    				'500': '#2563EB',
    				'600': '#004B95',
    				'700': '#003B75',
    				'800': '#002E5C',
    				'900': '#002447',
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
    			'header-gradient': 'linear-gradient(135deg, #FE7F01 0%, #FF5500 100%)',
    			'blue-gradient': 'linear-gradient(135deg, #2563EB 0%, #004B95 100%)',
    			'brand-gradient': 'linear-gradient(135deg, #FE7F01 0%, #004B95 100%)',
    			'dark-gradient': 'linear-gradient(180deg, #070A12 0%, #0D1322 100%)',
    			'card-gradient': 'linear-gradient(135deg, rgba(18, 26, 45, 0.9) 0%, rgba(13, 19, 34, 0.8) 100%)'
    		},
    		fontFamily: {
    			sans: [
    				'Inter',
    				'system-ui',
    				'sans-serif'
    			],
    			display: [
    				'Poppins',
    				'Inter',
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
    			'bounce-slow': 'bounceSlow 4s ease-in-out infinite',
    			'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
    			'pulse-blue': 'pulseBlue 2.5s ease-in-out infinite',
    			float: 'float 4s ease-in-out infinite'
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
    			bounceSlow: {
    				'0%, 100%': {
    					transform: 'translateY(0)'
    				},
    				'50%': {
    					transform: 'translateY(-15px)'
    				}
    			},
    			pulseGlow: {
    				'0%, 100%': {
    					boxShadow: '0 0 15px rgba(254, 127, 1, 0.3), 0 0 30px rgba(254, 127, 1, 0.1)'
    				},
    				'50%': {
    					boxShadow: '0 0 25px rgba(254, 127, 1, 0.6), 0 0 50px rgba(254, 127, 1, 0.25)'
    				}
    			},
    			pulseBlue: {
    				'0%, 100%': {
    					boxShadow: '0 0 15px rgba(37, 99, 235, 0.3), 0 0 30px rgba(0, 75, 149, 0.1)'
    				},
    				'50%': {
    					boxShadow: '0 0 25px rgba(37, 99, 235, 0.6), 0 0 50px rgba(0, 75, 149, 0.25)'
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
    			soft: '0 2px 15px -3px rgba(0, 0, 0, 0.4), 0 10px 20px -2px rgba(0, 0, 0, 0.3)',
    			medium: '0 4px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 30px -5px rgba(0, 0, 0, 0.4)',
    			strong: '0 10px 40px -10px rgba(0, 0, 0, 0.6), 0 20px 50px -10px rgba(0, 0, 0, 0.5)',
    			'orange-glow': '0 0 25px rgba(254, 127, 1, 0.4)',
    			'blue-glow': '0 0 25px rgba(37, 99, 235, 0.4)',
    			'card-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
    		}
    	}
    },
    plugins: [
        plugin(function ({addUtilities}) {
            const customUtilities = {
                '.text-shadow-sm': {
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                },
                '.text-shadow-md': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
                },
                '.text-shadow-lg': {
                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)',
                },
                '.text-shadow-orange': {
                    textShadow: '0 0 20px rgba(254, 127, 1, 0.6)',
                },
                '.text-shadow-blue': {
                    textShadow: '0 0 20px rgba(37, 99, 235, 0.6)',
                },
                '.glass-dark': {
                    background: 'rgba(18, 26, 45, 0.75)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(30, 44, 74, 0.8)',
                },
                '.glass-nav': {
                    background: 'rgba(7, 10, 18, 0.85)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(30, 44, 74, 0.7)',
                }
            }

            addUtilities(customUtilities)
        }),
        require("tailwindcss-animate")
    ],
};