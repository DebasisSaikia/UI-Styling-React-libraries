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
const Label = styled.label`
  font-size: 25px;
`;
/* background-color: ${(props) => props.color}; */

const NavRight = styled.div``;

const Navbar = () => {
  return (
    <NavContainer>
      <NavLeft>
        <StyledButton bgColor="blue" text="Sign Up" />
      </NavLeft>
      <NavRight></NavRight>
    </NavContainer>
  );
};

export default Navbar;
