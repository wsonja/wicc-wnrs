import { style } from "@vanilla-extract/css";

import { primaryAccent, primaryAccentMuted } from "./globals.css";

export const appStyles = style({
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  fontWeight: 800,
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  maxWidth: 1080,
  margin: "0 auto",
  height: "100%",

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "nowrap",
      padding: "6.5rem 0.75rem 1rem 0.75rem",
      boxSizing: "border-box",
    },
  },
});

export const titleStyles = style({
  color: primaryAccent,
  fontSize: 30,
  marginTop: "3vh",
  marginBottom: "3vh",
  fontWeight: 800,

  "@media": {
    "screen and (max-width: 768px)": {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      padding: "0.75rem 0.75rem 0.35rem 0.75rem",
      fontSize: 20,
      marginTop: 0,
      marginBottom: 0,
      backgroundColor: "white",
      zIndex: 20,
      boxSizing: "border-box",
    },
  },
});

export const levelsStyles = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  width: "17rem",

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      gap: "0.5rem",
      flexWrap: "nowrap",
    },
  },
});

export const levelButtonStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 15,
  borderRadius: 15,
  border: `solid 2px ${primaryAccent}`,
  backgroundColor: "#fff",
  height: 88,
  width: 231,
  textTransform: "uppercase",
  color: primaryAccent,
  fontSize: 18,
  fontWeight: 800,
  fontFamily: "inherit",
  cursor: "pointer",

  ":hover": {
    backgroundColor: primaryAccentMuted,
    color: "rgb(240, 240, 240)",
  },
  selectors: {
    "&:focus, &:active": {
      outline: "none",
    },
  },

  "@media": {
    "screen and (max-width: 768px)": {
      width: "5.5rem",
      height: "3rem",
      margin: 0,
      fontSize: 14,
      borderRadius: 12,
    },
  },
});

export const selectedLevelStyles = style({
  backgroundColor: primaryAccent,
  color: "#fff",
  outline: "none",
});

export const nextCardButtonStlyes = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 25,
  borderRadius: 15,
  backgroundColor: ["#fff", primaryAccent],
  height: 88,
  width: 231,
  textTransform: "uppercase",
  color: "#fff",
  outline: "none",
  fontSize: 18,
  fontWeight: 800,
  fontFamily: '"Biryani", sans-serif',
  border: "none",

  ":hover": {
    backgroundColor: primaryAccentMuted,
    color: "rgb(240, 240, 240)",
    cursor: "pointer",
  },
});

export const questionStyles = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "26rem",
  textTransform: "uppercase",
  alignItems: "center",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
      maxWidth: "100%",
    },
  },
});