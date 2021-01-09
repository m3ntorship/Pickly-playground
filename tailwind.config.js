module.exports = {
  purge: ['./src/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--primary)',
        shd1: 'color-mod(var(--primary) lightness(65%))',
        shd2: 'color-mod(var(--primary) lightness(70%))',
        shd3: 'color-mod(var(--primary) lightness(75%))',
        shd4: 'color-mod(var(--primary) lightness(80%))',
        shd5: 'color-mod(var(--primary) lightness(85%))',
        shd6: 'color-mod(var(--primary) lightness(90%))',
        shd7: 'color-mod(var(--primary) lightness(95%))',
        dark: 'color-mod(var(--primary) blackness(20%))'
      },
      accent: {
        DEFAULT: 'var(--accent)',
        shd1: 'color-mod(var(--accent) lightness(52%))',
        shd2: 'color-mod(var(--accent) lightness(59%))',
        shd3: 'color-mod(var(--accent) lightness(66%))',
        shd4: 'color-mod(var(--accent) lightness(73%))',
        shd5: 'color-mod(var(--accent) lightness(79%))',
        shd6: 'color-mod(var(--accent) lightness(86%))',
        shd7: 'color-mod(var(--accent) lightness(93%))'
      },
      warning: {
        DEFAULT: 'var(--warning)',
        shd1: 'color-mod(var(--warning) lightness(67%))',
        shd2: 'color-mod(var(--warning) lightness(72%))',
        shd3: 'color-mod(var(--warning) lightness(76%))',
        shd4: 'color-mod(var(--warning) lightness(81%))',
        shd5: 'color-mod(var(--warning) lightness(86%))',
        shd6: 'color-mod(var(--warning) lightness(91%))',
        shd7: 'color-mod(var(--warning) lightness(95%))'
      },
      success: {
        DEFAULT: 'var(--success)',
        shd1: 'color-mod(var(--success) lightness(44%))',
        shd2: 'color-mod(var(--success) lightness(52%))',
        shd3: 'color-mod(var(--success) lightness(60%))',
        shd4: 'color-mod(var(--success) lightness(68%))',
        shd5: 'color-mod(var(--success) lightness(76%))',
        shd6: 'color-mod(var(--success) lightness(84%))',
        shd7: 'color-mod(var(--success) lightness(92%))'
      },
      error: {
        DEFAULT: 'var(--error)',
        shd1: 'color-mod(var(--error) lightness(68%))',
        shd2: 'color-mod(var(--error) lightness(73%))',
        shd3: 'color-mod(var(--error) lightness(77%))',
        shd4: 'color-mod(var(--error) lightness(82%))',
        shd5: 'color-mod(var(--error) lightness(86%))',
        shd6: 'color-mod(var(--error) lightness(91%))',
        shd7: 'color-mod(var(--error) lightness(95%))'
      },
      dark: {
        DEFAULT: '#00171F',
        grey: '#5B6366'
      },
      grey: {
        DEFAULT: 'var(--grey)',
        shd1: 'color-mod(var(--grey) lightness(65%))',
        shd2: 'color-mod(var(--grey) lightness(70%))',
        shd3: 'color-mod(var(--grey) lightness(78%))',
        shd4: 'color-mod(var(--grey) lightness(83%))',
        shd5: 'color-mod(var(--grey) lightness(89%))',
        shd6: 'color-mod(var(--grey) lightness(94%))',
        shd7: 'color-mod(var(--grey) lightness(98%))',
        bg: '#FAFAFC',
        bg2: '#F8F7FA'
      },
      white: {
        DEFAULT: '#FFFFFF'
      }
    },
    borderRadius: {
      none: '0',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      xl: '6.25rem',
      full: '999px'
    },
    boxShadow: {
      dark:
        '0px 8px 16px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.08);',
      heavy:
        '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 8px 12px rgba(0, 0, 0, 0.08);',
      none: 'none'
    },
    fontSize: {
      '2xs': ['.625rem', '1.4'], //10px
      xs: ['.75rem', '1.4'], //12px
      sm: ['.875rem', '1.4'], //14px
      base: ['1rem', '1.4'], //16px
      md: ['1.25rem', '1.4'], //20px
      lg: ['1.5rem', '1.4'], //24px
      xl: ['1.75rem', '1.4'], //28px
      '2xl': ['2rem', { lineHeight: '1.3', letterSpacing: '-.05em' }], //32px
      '3xl': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-.05em' }], //40px
      '4xl': ['3rem', { lineHeight: '1.3', letterSpacing: '-.05em' }], //48px
      '8xl': ['6rem', { lineHeight: '1.3', letterSpacing: '-.05em' }] //96px
    },
    fontFamily: {
      sans: ['Roboto']
    },
    extend: {
      spacing: {
        '3xs': '.125rem',
        xxs: '.25rem',
        xs: '.5rem',
        s: '.75rem',
        m: '1rem',
        l: '1.5rem',
        xl: '2rem',
        xxl: '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '8rem'
      },

      backgroundOpacity: {
        24: '0.24',
        xs: '.5rem',
        s: '.75rem',
        m: '1rem',
        l: '1.5rem',
        xl: '2rem',
        xxl: '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '8rem'
      },
      width: {
        '39xl': '39.5rem',
        '37xl': '37.5rem',
        '8xl': '8.8125rem',
        '4sxl': '4.1875rem',
        '18xl': '18.5rem'
      },
      height: {
        '61xl': '61.0625rem',
        '21xl': '21.25rem'
      }
    }
  },
  variants: {
    extend: {
      textDecoration: ['group-focus']
    }
  },
  plugins: []
};
