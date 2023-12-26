module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          text: '#000',
          background: '#fff',
          tint: '#2f95dc',
          tabIconDefault: '#ccc',
          tabIconSelected: '#2f95dc',
        },
        dark: {
          text: '#fff',
          background: '#000',
          tint: '#fff',
          tabIconDefault: '#ccc',
          tabIconSelected: '#fff',
        },
        general: {
          lightRed: '#C8353C',
          darkRed: '#8D060C',
          yellow: '#FFDA00',
          textBlur: '#F4F4F4',
          textColor: '#ffffff'
        }
      }
    },
  },
  plugins: [],
};
