module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '100vw': '100vw'
      },
      height: {
        '100vh': '100vh'
      },
      fontSize: {
          title: '30px',
          desc: '35px',
      },
      maxWidth: {
        custom: '1440px',
      },
      borderColor: {
        primary: '#0a3b8c',
        secondary: '#444444',
      },
      backgroundColor: {
        primary: '#444444',
        secondary: '#222831',
        lightgrey: '#393e46',
        indigo: '#5851f9',
        orange: '#b55400',
      },
      colors: {
        dark: '#444444',
      },
      boxShadow: {
        blue: '0 4px 14px 0 rgba(19, 51, 81, 0.4)',
        white: '0 4px 14px 0 rgba(255, 255, 255, 0.7)'
      },
      fontFamily: {
        poppins: [
          'Poppins',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
