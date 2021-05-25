import React from "react";

import { wrapper } from "./Wrapper.module.css";

function Wrapper({ children, className }) {
  return (
    <div className={`${wrapper} ${className ? className : ""}`}>{children}</div>
  );
}

export default Wrapper;
