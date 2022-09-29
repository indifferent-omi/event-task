/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx}',
    "./src/components/**/*.{js,ts,jsx}",
    "./src/containers/**/*.{js,ts,jsx}"
  ],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '480px',
      'sm': '575px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1500px',
      // '4xl': '1600px',
    },
    // container: {
    //   center:true,
    //   screens: {
    //      "xxs": "100%",
    //      "xs": "100%",
    //      "sm": "575px",
    //      "md": "720px",
    //      "lg": "960px",
    //      "xl": "1140px",
    //      "2xl": "1320px"
    //   }
    // },
    
    dropShadow:{
      "custom-1": "0px 0px 46.8696px rgba(0, 0, 0, 0.05)"
    },
     lineHeight: {
      '2x': '2',
      "inherit":"inherit"
    },
    
    borderRadius:{
      "xl": "0.625rem"
    },
    extend: {
      borderRadius: {
        xs:"0.2344rem",
        full:"31.25rem",
        DEFAULT:"0.625rem",
      },
      fontSize: {
        "6xl" : ["4rem","1"],//64px
        "3xl" : ["1.75rem","1"],//28px
        "size-inherit":"inherit"
       },
      fontFamily: {
        'body': 'Helvetica, "sans-serif"',
      },
      colors:{
        "primary":"#240D57",
        "secondary":"#CCB6FF",
        "purple":"#8456EC",
        "purple-light":"#501FC1",
        "purple-lighter":"#EDE5FF",
        "purple-white":"#F6F2FF",
        "red":"#E61445",
        "red-light":"#FFD7E0",
        "green":"#00805E",
        "green-light":"#D3FFE2",
        "pink":"#E87BF8",
        "gray":"#4F4F4F",

      },
      flex: {
        "col":"0 0 auto"
      },
      // spacing:{
      //   "1p6":"0.1rem",
      //   "15":"3.75rem",
      //   "30":"7.5rem"
      // },
      minWidth: {
        '40':'2.5rem',
        '69':'4.3125rem',
        '154':'9.625rem',
        "11":"11.6875rem",//187px
        "20":"20rem"//320
      },
      maxWidth: {
        "34":"34rem",//320px
        "20":"20rem",//320px
        "19":"19rem",//310px
        "18":"18.125rem",//310px,
        "27":"27.5rem"//440px
      },
      minHeight:{
        3:"3.125rem"
      },
      backgroundImage: {
        'btn-gradient': "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
      },
      
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          "@apply px-3 mx-auto":{},
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1156px',
          },
        }
      })
    }
  ]
}
