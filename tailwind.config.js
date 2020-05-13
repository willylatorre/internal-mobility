module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js'],
  theme: {
    colors: {
      green: '#0ABF53',
      grey: '#A3AEBF',
      darkGrey: '#5A6E8B',
      borderGrey: '#DDE6EE'
    },
    extend: {
      height: {
        nav: '60px'
      },
      maxWidth: {
        input: '220px'
      }
    }
  },
  variants: {
    margin: ['first', 'last', 'responsive'],
    padding: ['first', 'last', 'responsive']
  },
  plugins: []
}
