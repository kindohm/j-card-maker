import { useAtom } from "jotai";
import { AppContext } from "../AppContext";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const InputGroup = styled(Form.Group)`
  margin-top: 1rem;
`;

export const Controls = () => {
  const [context, setContext] = useAtom(AppContext);
  const {
    foregroundColor,
    backgroundColor,
    front,
    inside,
    spine,
    back,
    fontSizeFront,
    fontSizeSpine,
    fontSizeBack,
    fontSizeInside,
  } = context;

  const valueChanged = (field: string, value: string | number) => {
    setContext({ ...context, [field]: value });
  };

  return (
    <div>
      <InputGroup>
        <Form.Label>Front</Form.Label>
        <Form.Control
          type="text"
          placeholder="front text"
          value={front}
          onChange={({ target }) => valueChanged("front", target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Form.Label>Spine</Form.Label>
        <Form.Control
          type="text"
          placeholder="spine text"
          value={spine}
          onChange={({ target }) => valueChanged("spine", target.value)}
        />
      </InputGroup>
      <InputGroup>
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
      </InputGroup>
      <InputGroup>
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
      </InputGroup>
      <InputGroup>
        <Form.Label>Foreground</Form.Label>
        <Form.Control
          type="text"
          placeholder="#333333"
          value={foregroundColor}
          onChange={({ target }) =>
            valueChanged("foregroundColor", target.value)
          }
        />
      </InputGroup>
      <InputGroup>
        <Form.Label>Background</Form.Label>
        <Form.Control
          type="text"
          placeholder="#cccccc"
          value={backgroundColor}
          onChange={({ target }) =>
            valueChanged("backgroundColor", target.value)
          }
        />
      </InputGroup>
      <InputGroup>
        <Form.Label>Front Font</Form.Label>
        <Form.Control
          type="number"
          placeholder="0.5"
          min={0.1}
          max={5}
          step={0.1}
          value={fontSizeFront}
          onChange={({ target }) =>
            valueChanged("fontSizeFront", +target.value)
          }
        />
      </InputGroup>
      <InputGroup>
        <Form.Label>Spine Font</Form.Label>
        <Form.Control
          type="number"
          placeholder="0.5"
          min={0.1}
          max={5}
          step={0.1}
          value={fontSizeSpine}
          onChange={({ target }) =>
            valueChanged("fontSizeSpine", +target.value)
          }
        />
      </InputGroup>

      <InputGroup>
        <Form.Label>Back Font</Form.Label>
        <Form.Control
          type="number"
          placeholder="0.5"
          min={0.1}
          step={0.1}
          max={5}
          value={fontSizeBack}
          onChange={({ target }) => valueChanged("fontSizeBack", +target.value)}
        />
      </InputGroup>

      <InputGroup>
        <Form.Label>Inside Font</Form.Label>
        <Form.Control
          type="number"
          placeholder="0.5"
          min={0.1}
          max={5}
          step={0.1}
          value={fontSizeInside}
          onChange={({ target }) =>
            valueChanged("fontSizeInside", +target.value)
          }
        />
      </InputGroup>
    </div>
  );
};
