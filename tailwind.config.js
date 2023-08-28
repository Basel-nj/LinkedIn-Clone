/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "red",
         },
         backgroundSize: {
            special: "462px",
            special2: "60%",
         },
         screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2x1": "1400px",
         },
         keyframes: {
            moveRight: {
               "0%": { transform: "translateX(0)" },
               "50%": { transform: "translateX(10px)" },
               "100%": { transform: "translateX(0)" },
            },
            fadeIn: {
               "0%": {
                  opacity: "0",
               },
               "100%": {
                  opacity: "1",
               },
            },
         },
         animation: { fadeIn: "fadeIn 0.3s" },
      },
   },
   plugins: [],
};
