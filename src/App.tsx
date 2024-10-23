import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Preview } from "./components/Preview";
import { Controls } from "./components/Controls";

// const AppContext = createContext(initialContext);

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div>
            <Preview />
          </div>
        </Col>
        <Col xs={5}>
          <Controls />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
