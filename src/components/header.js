import React from "react";
import { Link } from "gatsby";

const styles = {
  nav: {
    display: "flex",
    flexDirection: "row",
    "& > a": {
      paddingRight: "1rem",
    },
  },
};

export default function Header() {
  return (
    <>
      <h1>allizon.github.io</h1>
      <div style={styles.nav}>
        <Link to="/index">Home</Link>
        <Link to="/about">About Me</Link>
      </div>
    </>
  );
}
