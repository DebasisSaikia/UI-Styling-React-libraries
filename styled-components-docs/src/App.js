import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";

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
    </Container>
  );
}

export default App;
