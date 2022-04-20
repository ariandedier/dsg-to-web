import styled from "styled-components";
import Header from './components/Header'
import Main from "./components/Main";

function App() {
  return (
    <Container>
      <Header/>
      <Main/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default App;
