module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        pulsate: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
            'box-shadow': '0 10px 40px rgba(0, 0, 0, 0.25)',
          },
          '100%': {
            transform: 'scale(1)',
            'box-shadow': 'none',
          },
        },

        moveInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '80%': {
            transform: 'translateX(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },

        moveInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          '80%': {
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)',
          },
        },

        btnMoveInBottom: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        imgMoveInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(130px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },

        heroMoveInBottom: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        openNavModal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100px)',
          },
          '100%': {
            opacity: '100',
            transform: 'translateY(0)',
          },
        },

        closeNavModal: {
          '0%': {
            opacity: '100',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-100px)',
          },
        },
      },

      animation: {
        pulsate: 'pulsate 1s infinite',
        moveInLeft: 'moveInLeft 2s ease-out',
        moveInRight: 'moveInRight 2s ease-out',
        btnMoveInBottom: 'btnMoveInBottom 1.8s ease-out backwards',
        imgMoveInRight: 'imgMoveInRight 2s ease-out',
        heroMoveInBottom: 'heroMoveInBottom 1s ease-out',
        openNavModal: 'openNavModal 0.4s ease-out forwards',
        closeNavModal: 'closeNavModal 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
