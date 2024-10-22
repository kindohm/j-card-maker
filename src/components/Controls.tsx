import { useAtom } from "jotai";
import { AppContext } from "../AppContext";
import { Form } from "react-bootstrap";

export const Controls = () => {
  const [context, setContext] = useAtom(AppContext);
  const { front, inside, spine, back } = context;

  const valueChanged = (field: string, value: string) => {
    setContext({ ...context, [field]: value });
  };

  return (
    <div>
      <Form.Group>
        <Form.Label>Front</Form.Label>
        <Form.Control
          type="text"
          placeholder="front text"
          value={front}
          onChange={({ target }) => valueChanged("front", target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Spine</Form.Label>
        <Form.Control
          type="text"
          placeholder="spine text"
          value={spine}
          onChange={({ target }) => valueChanged("spine", target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Inside</Form.Label>
        <Form.Control
          as="textarea"
          cols={100}
          rows={5}
          type="text"
          placeholder="inside text"
          value={inside}
          onChange={({ target }) => valueChanged("inside", target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Back</Form.Label>
        <Form.Control
          as="textarea"
          cols={100}
          rows={5}
          type="text"
          placeholder="back text"
          value={back}
          onChange={({ target }) => valueChanged("back", target.value)}
        />
      </Form.Group>
    </div>
  );
};
