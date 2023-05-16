/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        custombgcolor: '#ECF0F3',
        sociallinkcolor:"#E5EBEE",
        linkcolor:'#0D1013' // Custom color hex value
      },
      fontFamily: {
        'sans': ['Montserrate', 'sans serif'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '16px',
      } 
      // dropShadow: {
      //   '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      //   '4xl': [
      //       '0 35px 35px rgba(0, 0, 0, 0.25)',
      //       '0 45px 65px rgba(0, 0, 0, 0.15)'
      //   ]
      // }
    },
  },
  plugins: [],
}
