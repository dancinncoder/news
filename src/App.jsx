import { styled } from "styled-components";
import "./App.css";
import Nav from "./component/layout/Nav";

function App() {
  return (
    <div className="App">
      <StHeader>
        <Nav />
      </StHeader>
    </div>
  );
}

export default App;

const StHeader = styled.header`
  background-color: yellow;
  width: 100%;
  height: 100px;
`;
