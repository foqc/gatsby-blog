module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '769px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      'xxs': '.65rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
