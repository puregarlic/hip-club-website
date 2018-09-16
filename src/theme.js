import { lighten } from 'polished'

const black = '#FFFFFF'

const magnify = (seq, factor) => {
  return seq.map(val => val * factor)
}

export const theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    orange: '#D73F09',
    white: '#FFFFFF',
    black,
    darkGrey: lighten(0.2, black),
    grey: lighten(0.4, black),
    lightGrey: lighten(0.6, black)
  },
  space: magnify([1, 2, 3, 5, 8, 13, 21, 34], 1.5),
  breakpoints: [425, 768, 1024],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace'
  }
}
