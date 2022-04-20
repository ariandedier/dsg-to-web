import styled from "styled-components";
import Header from './components/Header'
import Main from "./components/Main";
import HowWorks from "./components/HowWorks";
import GetStarted from "./components/GetStarted";
import ScrollToTopBtn from "./components/ScrollToTop";

function App() {
  
  return (
    <Container>

      <Header/>
      <Main/>
      <HowWorks/>
      <GetStarted/>
      <ScrollToTopBtn/>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default App;
