import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import styled, { keyframes, css } from "styled-components";
import Theming from "./components/Theming";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

// styling components
const Link = ({ className, children }) => {
  return <a className={className}>{children}</a>;
};
const StyledLink = styled(Link)`
  color: red;
  font-size: 25px;
  text-transform: uppercase;
`;

// passed props
const Input = styled.input`
  width: 300px;
  height: 40px;
  outline: none;
  border: 2px solid red;
  color: ${(props) => props.inpColor || "olive"};
`;

const animate = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Animate = styled.div`
  animation: ${animate} 2s linear infinite;
  font-size: 1.2rem;
`;
const Disable = styled.button`
  width: 200px;
  height: 30px;
  border: ${(props) => props.bd || "none"};
  ${(props) =>
    props.priCo &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Link>Unstyled Link</Link>
      <br />
      <StyledLink>Styled with SC</StyledLink>
      <Input type="text" />
      <br />
      <Input type="text" inpColor="red" />
      {/* <Animate>&gt; &lt;</Animate> */}
      <br />
      <Disable priCo bd="1px solid black">
        Disable{" "}
      </Disable>
      <Theming />
    </Container>
  );
}

export default App;
