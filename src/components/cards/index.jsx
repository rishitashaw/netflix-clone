import React from "react";

import { Container } from "./styles/cards";

export default function Cards({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
