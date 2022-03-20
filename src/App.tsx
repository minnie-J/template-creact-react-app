import { GlobalStyle } from "global";
import styled from "styled-components/macro";

const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DemoText = styled.div`
  font-size: 3rem;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <DemoText>Hello World 🎉</DemoText>
    </Container>
  );
}

export default App;
