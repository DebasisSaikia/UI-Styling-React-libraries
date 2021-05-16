import React from "react";
import styled, { ThemeProvider } from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10rem;
  cursor: pointer;
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// default theme
Button.defaultProps = {
  theme: {
    main: "palevioletred",
  },
};

// custom theming
const theme = {
  main: "green",
  sec: "rgba(0,0,0,0.7)",
};

const Card = styled.div`
  width: 350px;
  height: 250px;
  background-color: ${(props) => props.theme.sec};
`;

function Theming() {
  return (
    <div>
      <Button>Theming</Button>
      <br />
      <ThemeProvider theme={theme}>
        <Button>Custom Theming</Button>
        <Card></Card>
      </ThemeProvider>
    </div>
  );
}

export default Theming;
