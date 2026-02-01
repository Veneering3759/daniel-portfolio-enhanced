/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
        },
        brand: {
          emerald: '#10B981',
          'emerald-light': '#34D399',
          'emerald-dark': '#059669',
          rose: '#F43F5E',
          'rose-light': '#FB7185',
          'rose-dark': '#E11D48',
          teal: '#14B8A6',
          pink: '#EC4899',
        },
        luxury: {
          gold: '#C9A961',
          'gold-light': '#E5C889',
          'gold-dark': '#9B8042',
          sapphire: '#0C4A6E',
          'sapphire-light': '#0EA5E9',
          ruby: '#BE123C',
          emerald: '#059669',
          navy: '#1E3A8A',
          'navy-light': '#3B82F6',
        },
        elegant: {
          champagne: '#F7E7CE',
          bronze: '#CD7F32',
          platinum: '#E5E4E2',
          onyx: '#0F172A',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'glow-gold': 'glow-gold 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'shimmer-gold': 'shimmer-gold 4s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5)'
          },
        },
        'glow-gold': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.4)'
          },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'shimmer-gold': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.5)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3)',
        'card': '0 8px 16px -4px rgba(0, 0, 0, 0.4), 0 4px 8px -2px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 40px -8px rgba(0, 0, 0, 0.5), 0 10px 20px -4px rgba(0, 0, 0, 0.4)',
        'luxury': '0 10px 40px -10px rgba(212, 175, 55, 0.4), 0 0 20px rgba(59, 130, 246, 0.2)',
        'luxury-hover': '0 20px 60px -10px rgba(212, 175, 55, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)',
      },
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
        '400%': '400% 400%',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
