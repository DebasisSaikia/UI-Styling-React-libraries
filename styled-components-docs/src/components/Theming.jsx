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

const Box = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.bdd};
  color: ${(props) => props.theme.bdd};
  background-color: ${(props) => props.theme.bg};
  width: 200px;
`;

const theme1 = {
  bdd: "orange",
  bg: "#white",
};

const invert = {
  bg: "black",
  bdd: "#fff",
};

// styled objects
const StObj = styled.div({
  height: "50px",
  width: " 50px",
  background: "red",
});

function Theming() {
  return (
    <div>
      <Button>Theming</Button>
      <br />
      <ThemeProvider theme={theme}>
        <Button>Custom Theming</Button>
        <Card></Card>
      </ThemeProvider>
      <ThemeProvider theme={theme1}>
        <Box>this is box</Box>
      </ThemeProvider>
      <ThemeProvider theme={invert}>
        <Box>this is inverted</Box>
      </ThemeProvider>
    </div>
  );
}

export default Theming;
