/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                burgundy: {
                    900: '#2D0202', // Very Dark
                    800: '#4A0404', // Deep Royal Red
                    700: '#680606',
                },
                gold: {
                    100: '#F9F1D8',
                    200: '#F0E3B6',
                    300: '#E6D491',
                    400: '#DCC56C',
                    500: '#D4AF37', // Classic Metallic Gold
                    600: '#AA8C2C',
                    700: '#806921',
                },
                cream: '#FDFBF7',
                velvet: '#1a0000', // Almost black red
            },
            fontFamily: {
                cinzel: ['Cinzel', 'serif'],
                lato: ['Lato', 'sans-serif'],
            },
            backgroundImage: {
                'royal-gradient': 'radial-gradient(circle at center, #4A0404 0%, #1a0000 100%)',
                'gold-shiny': 'linear-gradient(45deg, #FFD700, #FDB931, #FFD700)',
            },
            boxShadow: {
                'gold-glow': '0 0 15px rgba(212, 175, 55, 0.3)',
                'velvet-depth': 'inset 0 0 20px rgba(0,0,0,0.6)',
            },
            animation: {
                'sparkle': 'sparkle 2s infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                sparkle: {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                    '50%': { opacity: 0.5, transform: 'scale(0.8)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
