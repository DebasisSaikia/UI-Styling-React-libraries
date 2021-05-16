import React from "react";
import styled from "styled-components";
import Button from "../Button";

const NavContainer = styled.nav`
  height: 80px;
  width: 100%;
  background-color: #111;
`;

const NavLeft = styled.div`
  height: 80px;
  width: 100%;
  background-color: #111;
`;
const StyledButton = styled(Button)`
  width: 200px;
  height: 40px;
  background-color: ${({ bgColor }) => bgColor};
  text-align: center;
  &:hover {
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    & label {
      color: red;
    }
  }
`;
const PrimaryButton = styled.button`
  height: 50px;
  width: 200px;
  border: 2px solid #111;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "yellow" : "#fff")};
  color: ${(props) => (props.primary ? "#111" : "#111")};
`;
const Label = styled.label`
  font-size: 25px;
`;
const Extends = styled.div`
  color: palevioletred;
  font-size: 1em;
  width: 200px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
/* background-color: ${(props) => props.color}; */

const NavRight = styled.div``;

const Navbar = () => {
  return (
    <NavContainer>
      <NavLeft>
        <StyledButton bgColor="blue" text="Sign Up" />
      </NavLeft>
      <NavRight>
        <PrimaryButton primary>Log in</PrimaryButton>
      </NavRight>
      <Extends>Extended</Extends>
    </NavContainer>
  );
};

export default Navbar;
