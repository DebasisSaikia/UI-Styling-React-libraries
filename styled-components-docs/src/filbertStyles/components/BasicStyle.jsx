import React from "react";
import { styled } from "@filbert-js/core";

// filbert with styled components
const Mainbox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
`;
const Btn = styled("button")`
  width: 200px;
  height: 40px;
  padding: 10px 20px;
  border: 2px solid ${({ primary }) => (primary ? "#111" : "orange")};
  color: "#111";
`;
// =========

const BasicStyle = () => {
  return (
    <Mainbox>
      <Btn primary>Filbert Button</Btn>
    </Mainbox>
  );
};

export default BasicStyle;
