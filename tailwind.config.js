// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./src/**/*.{html,js,svelte,ts}'],
//   theme: {
//     extend: {},
//     keyframes: {
//       wave: {
//         '0%': { backgroundPosition: '0% 50%' },
//         '50%': { backgroundPosition: '100% 50%' },
//         '100%': { backgroundPosition: '0% 50%' },
//       }
//     },
//     animation: {
//       wave: 'wave 15s ease infinite',
//     }
//   },
//     colors: {
//       customBlue: {
//         DEFAULT: '#97E0FF',
//         dark: '#609FB2' // This is a darker shade, adjust as needed.
//       },

//       backdropFilter: { // if it isn't already in your config
//         'blur': 'blur(20px)'
//       },
//     },
  
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        wave: 'wave 15s ease infinite',
      },
      colors: {
        customBlue: {
          DEFAULT: '#97E0FF',
          dark: '#609FB2' // Adjusted darker shade
        }
      },
      backdropFilter: { // if it isn't already in your config
        'blur': 'blur(20px)'
      },
    },
  },
  plugins: [],
}
