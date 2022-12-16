/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        grayOne: '#F2F2F2',
        grayTwo: '#D9D9D9',
        grayThree: '#808080',
        grayFour: '#333333',
        grayFive: '#262626',
        graySix: '#1A1A1A',
        graySeven: '#0D0D0D',
        Purple: '#8284FA',
        PurpleDark: '#5E60CE',
        blue: '#4EA8DE',
        blueDark: '#1E6F9F',
        danger: '#E25858',
      },
    },
    data: {
      checked: 'state~="checked"',
    },
  },
  plugins: [],
}
