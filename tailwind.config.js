export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        luxe: '#C89B3C',
        ink: '#111111',
        paper: '#F4EEE6',
        shadow: 'rgba(17, 17, 17, 0.08)'
      },
      boxShadow: {
        soft: '0 18px 40px rgba(17, 17, 17, 0.08)'
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-wave': 'radial-gradient(circle at top, rgba(200,155,60,0.08), transparent 35%)'
      }
    }
  },
  plugins: []
};
