module.exports = {
  purge: {
    options: {
      whitelistPatterns: [/el-/]
    },
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js']
  },
  theme: {
    colors: {
      green: '#0ABF53',
      white: 'white',
      grey: '#A3AEBF',
      darkGrey: '#5A6E8B',
      borderGrey: '#DDE6EE',
      lightGrey: '#FDFDFD'
    },
    extend: {
      height: {
        nav: '60px',
        cta: '80px'
      },
      maxHeight: {
        image: '400px',
        imageSmall: '200px'
      },
      maxWidth: {
        input: '220px',
        image: '400px',
        block: '600px'
      }
    }
  },
  variants: {
    margin: ['first', 'last', 'responsive'],
    padding: ['first', 'last', 'responsive']
  },
  plugins: []
}
