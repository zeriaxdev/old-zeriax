module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 10s ease-in-out infinite",
        "gradient-y": "gradient-y 10s ease-in-out infinite",
        "gradient-xy": "gradient-xy 10s ease-in-out infinite",
        "3d-rotate": "3d-rotate 3s ease-in-out infinite",
        "3d-rotate-xy": "3d-rotate-xy 3s ease-in-out infinite",
        spin: "spin 1s ease-in-out infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "left top",
          },
          "33%": {
            "background-size": "200% 200%",
            "background-position": "center top",
          },
          "66%": {
            "background-size": "200% 200%",
            "background-position": "right top",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "left top",
          },
        },
        "3d-rotate": {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "left top",
            transform: "rotateX(0deg) rotateY(0deg)",
          },
          "33%": {
            "background-size": "200% 200%",
            "background-position": "center top",
            transform: "rotateX(180deg) rotateY(0deg)",
          },
          "66%": {
            "background-size": "200% 200%",
            "background-position": "right top",
            transform: "rotateX(180deg) rotateY(180deg)",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "left top",
            transform: "rotateX(360deg) rotateY(360deg)",
          },
        },
        "3d-rotate-xy": {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "left top",
            transform: "rotateX(0deg) rotateY(0deg)",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "left top",
            transform: "rotateX(360deg) rotateY(360deg)",
          },
        },
        spin: {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "left top",
            transform: "rotate(0deg)",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "left top",
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
