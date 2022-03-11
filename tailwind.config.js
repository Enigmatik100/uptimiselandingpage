module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#399AB3',
        secondary: '#2E7B8F',
        bgcolorv1: '#FFFFFF',
        bgcolorv2: '#F7FBFD',
        bgtab: '#F8F7F7;'
      }
    },
    fontFamily:{
      Poppins: ['Poppins', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif']
    },
    container:{
      center: true
    },
  },
  plugins: [],
}
