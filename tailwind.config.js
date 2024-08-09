/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        yoman: ["Assistant", "sans-serif"],
        roots: ["Danfo", "serif"]
      },
      backgroundImage: {
        blog: "url(/src/assets/home2.png)",
        hello: "url(/src/assets/5.png)",
        home: "url(/src/assets/home1.png)",
        bates: "url(/src/assets/bates.png)",
        kabeh: "url(/src/assets/bginvi.png)"
      },
      backgroundSize: {
        alit: "100%, 100%"
      },
      colors: {
        primary: '#151515',
        bodas: '#FFFFFF',
        hideung: '#000',
        abhu: '#787878',
        abhu2: '#525050',
        second: '#191919',
        light: '#FFFCFC',
        oren: '#F25A2B',
        pink: '#F32879',
        biru: '#1849CA',
        koneng: '#FFFD53'
      },
      spacing: {
        atas: '50px'
      },
      fontSize: {
        sm: '12px',
        base: '16px',
        md: '20px',
        lg: '40px',
        llg: '50px',
        xl: '60px',
        xxl: '70px'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

