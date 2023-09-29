import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, link }) => {
  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.name} onClick={() => {}}>
      {children}
    </button>
  );
};

export default Button;
