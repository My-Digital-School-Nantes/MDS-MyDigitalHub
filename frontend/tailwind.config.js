const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: '#fafafa',
          foreground: '#18181B',
          primary: {
            50: '#effcfc',
            100: '#d7f5f6',
            200: '#b4eaed',
            300: '#81dadf',
            400: '#46c1ca',
            500: '#2fb8c5',
            600: '#268594',
            700: '#256c79',
            800: '#265964',
            900: '#234b56',
            950: '#12303a',
            foreground: '#ffffff',
            DEFAULT: '#2fb8c5'
          },
          secondary: {
            50: '#f6f6f5',
            100: '#e7e7e6',
            200: '#d1d1d0',
            300: '#b1b0af',
            400: '#898887',
            500: '#6e6d6c',
            600: '#5e5d5c',
            700: '#50504e',
            800: '#464644',
            900: '#3d3d3c',
            950: '#262626',
            foreground: '#ffffff',
            DEFAULT: '#6e6d6c'
          }
        }
      },
      dark: {
        colors: {
          background: '#18181B',
          foreground: '#fafafa',
          primary: {
            50: '#effcfc',
            100: '#d7f5f6',
            200: '#b4eaed',
            300: '#81dadf',
            400: '#46c1ca',
            500: '#2fb8c5',
            600: '#268594',
            700: '#256c79',
            800: '#265964',
            900: '#234b56',
            950: '#12303a',
            foreground: '#ffffff',
            DEFAULT: '#2fb8c5'
          },
          secondary: {
            50: '#f6f6f5',
            100: '#e7e7e6',
            200: '#d1d1d0',
            300: '#b1b0af',
            400: '#898887',
            500: '#6e6d6c',
            600: '#5e5d5c',
            700: '#50504e',
            800: '#464644',
            900: '#3d3d3c',
            950: '#262626',
            foreground: '#ffffff',
            DEFAULT: '#6e6d6c'
          }
        }
      }
    }
  })]
}
