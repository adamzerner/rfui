import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "concourse_3",
      serif: "equity_a",
    },
    colors: {
      primary: {
        50: "#DCEEFB",
        100: "#B6E0FE",
        200: "#84C5F4",
        300: "#62B0E8",
        400: "#4098D7",
        500: "#2680C2",
        600: "#186FAF",
        700: "#0F609B",
        800: "#0A558C",
        900: "#003E6B",
      },
      neutral: {
        50: "#F0F4F8",
        100: "#D9E2EC",
        200: "#BCCCDC",
        300: "#9FB3C8",
        400: "#829AB1",
        500: "#627D98",
        600: "#486581",
        700: "#334E68",
        800: "#243B53",
        900: "#102A43",
      },
      supporting: {
        green: {
          50: "#E3F9E5",
          100: "#C1EAC5",
          200: "#A3D9A5",
          300: "#7BC47F",
          400: "#57AE5B",
          500: "#3F9142",
          600: "#2F8132",
          700: "#207227",
          800: "#0E5814",
          900: "#05400A",
        },
        yellow: {
          50: "#FFFBEA",
          100: "#FFF3C4",
          200: "#FCE588",
          300: "#FADB5F",
          400: "#F7C948",
          500: "#F0B429",
          600: "#DE911D",
          700: "#CB6E17",
          800: "#B44D12",
          900: "#8D2B0B",
        },
        cyan: {
          50: "#E0FCFF",
          100: "#BEF8FD",
          200: "#87EAF2",
          300: "#54D1DB",
          400: "#38BEC9",
          500: "#2CB1BC",
          600: "#14919B",
          700: "#0E7C86",
          800: "#0A6C74",
          900: "#044E54",
        },
        red: {
          50: "#FFEEEE",
          100: "#FACDCD",
          200: "#F29B9B",
          300: "#E66A6A",
          400: "#D64545",
          500: "#BA2525",
          600: "#A61B1B",
          700: "#911111",
          800: "#780A0A",
          900: "#610404",
        },
      },
    },
    extend: {
      spacing: {
        px: "1px",
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.5rem",
        6: "2rem",
        7: "3rem",
        8: "4rem",
        9: "6rem",
        10: "8rem",
        11: "12rem",
        12: "16rem",
        13: "24rem",
        14: "32rem",
        15: "40rem",
        16: "48rem",
      },
    },
  },
} as Config & {
  content: string[];
  theme: {
    fontFamily: { sans: string; serif: string };
    colors: {
      primary: Color;
      neutral: Color;
      supporting: {
        green: Color;
        red: Color;
        yellow: Color;
        cyan: Color;
      };
    };
  };
};

type Color = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};
