import { style } from "@vanilla-extract/css";

import { primaryAccent } from "../../styles/globals.css";

export const creditStyles = style({
  fontSize: 12,
  fontWeight: 400,
  backgroundColor: "#fff",
  height: "auto",
  textAlign: "left",
  maxHeight: 20,
  width: 175,
  padding: 4,
  top: 30,
  left: 40,
  paddingLeft: 10,
  borderLeft: `1px solid ${primaryAccent}`,
  zIndex: 10,
  position: "fixed",
  overflow: "hidden",
  transition: "max-height 1.2s ease-in-out",

  "@media": {
    "screen and (max-width: 768px)": {
      position: "fixed",
      top: "3.25rem",
      left: 0,
      width: "100%",
      maxWidth: "100%",
      textAlign: "center",
      zIndex: 19,
      backgroundColor: "white",
      boxSizing: "border-box",
      border: "none",
      padding: "0.4rem 1rem 3rem 1rem",
      paddingLeft: "1rem",
    }
  },

  ":hover": {
    height: "auto",
    maxHeight: 1000,
    transition: "max-height 1.2s ease-in-out",
  },
});

export const creditTitleStyles = style({
  textTransform: "uppercase",
  fontWeight: 700,
  paddingBottom: 10,

  "@media": {
    "screen and (max-width: 768px)": {
      textAlign: "center",
      width: "100%",
      paddingBottom: 0,
    },
  },
});

export const contStyles = style({
  paddingTop: 10,
  borderTop: "1px solid #eee",

  "@media": {
    "screen and (max-width: 768px)": {
      textAlign: "left",
      padding: "0.75rem 1rem 1rem 1rem",
      marginTop: "0.5rem",
      borderTop: "1px solid #eee",
    },
  },
});
