import React from "react";
import { styled, css } from "@filbert-js/core";

// filbert with styled components
const Mainbox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  /* nested tag */
  div {
    width: 200px;
    height: 200px;
    background-color: orange;
    margin: 0 auto;
    &:hover {
      background-color: red;
      cursor: pointer;
    }
  }
`;
const Btn = styled("button")`
  width: 200px;
  height: 40px;
  padding: 10px 20px;
  border: 2px solid ${({ primary }) => (primary ? "#111" : "orange")};
  color: #111;
`;

const BlackBox = styled(Btn)`
  background: #111;
  border: 2px solid red;
  outline: none;
  color: #fff;
`;
// =========
// with CSS
const styles = css`
  width: 200px;
  height: 200px;
  background-color: #111;
  margin: 0 auto;
`;

// style any components
const Text = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};
const BigText = styled(Text)`
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  color: blueviolet;
`;

const BasicStyle = () => {
  return (
    <Mainbox>
      <Btn primary>Filbert Button</Btn>
      <div css={styles}>This is filbert with css</div>
      <BlackBox>Overidden</BlackBox>
      <BigText>This is Filbert</BigText>
    </Mainbox>
  );
};

export default BasicStyle;
