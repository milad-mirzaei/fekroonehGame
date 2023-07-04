/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const plugin =require("tailwindcss/plugin")



module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      addUtilities({
          ".my-rotate-y-180":{
              transform:"rotateY(180deg)"
          },
          ".preserve-3d":{
              transformStyle:"preserve-3d"
          },
          ".perspective":{
              perspective:"1000px"
          },
          ".backface-hidden":{
              backfaceVisibility:"hidden"
          }
      })
  })
  ],
}
