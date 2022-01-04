module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
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
      },
      colors: {
        dark: '#444444',
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
