import React, { Fragment } from "react";
import MainHeader from "./MainHeader";

const layout = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default layout;
