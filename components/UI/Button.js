import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, link }) => {
  return (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  );
};

export default Button;
