module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  theme: {
    fontFamily: {
      inc: ['Inconsolata', 'monospace']
    }
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};
