import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Preview2Panel } from "./components/Preview2Panel";
import { Preview1Panel } from "./components/Preview1Panel";
import { Controls } from "./components/Controls";
import { AppContext, JCardType } from "./AppContext";
import { useAtomValue } from "jotai";

function App() {
  const { type } = useAtomValue(AppContext);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div>
            {type === JCardType.JP0 ? <Preview1Panel /> : <Preview2Panel />}
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
