import { useAtom } from "jotai";
import { AppContext, JCardType } from "../AppContext";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { getColorCombo } from "../util/getColorCombo";
import { write } from "../util/storage";

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
    insideAlignBottom,
    spine,
    back,
    fontSizeFront,
    fontSizeSpine,
    fontSizeBack,
    fontSizeInside,
    showBounds,
    frontAlignBottom,
    frontAlignRight,
    type,
  } = context;

  const valueChanged = (field: string, value: string | number) => {
    const newContext = { ...context, [field]: value };
    setContext(newContext);
    write(newContext);
  };

  const randomize = () => {
    const { foreground, background } = getColorCombo();
    const newContext = {
      ...context,
      foregroundColor: foreground,
      backgroundColor: background,
    };
    setContext(newContext);
    write(newContext);
  };

  const download = () => {
    const svg = document.querySelector("svg");
    if (!svg) {
      return;
    }

    const data = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([data], {
      type: "image/svg+xml;charset=utf-8",
    });

    console.log("svgBlob", svgBlob);

    // convert the blob object to a dedicated URL
    const url = URL.createObjectURL(svgBlob);

    // load the SVG blob to a flesh image object
    const img = new Image();
    img.addEventListener("load", () => {
      // draw the image on an ad-hoc canvas
      const bbox = svg.getBBox();

      const canvas = document.createElement("canvas");
      canvas.width = bbox.width;
      canvas.height = bbox.height;

      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }
      context.drawImage(img, 0, 0, bbox.width, bbox.height);

      URL.revokeObjectURL(url);

      // trigger a synthetic download operation with a temporary link
      const a = document.createElement("a");
      a.download = "image.png";
      document.body.appendChild(a);
      a.href = canvas.toDataURL();
      a.click();
      a.remove();
    });
    img.src = url;
  };

  return (
    <div>
      <InputGroup>
        <Button onClick={randomize}>randomize</Button>
        <Button onClick={download}>download</Button>
      </InputGroup>

      <InputGroup>
        <Form.Label>Front</Form.Label>
        <Form.Control
          as="textarea"
          cols={100}
          rows={5}
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
      <Form.Check
        type="checkbox"
        label="Show Bounds"
        checked={showBounds}
        onChange={(x) =>
          setContext({ ...context, showBounds: x.target.checked })
        }
      />
      <Form.Check
        type="checkbox"
        label="Front Align Bottom"
        checked={frontAlignBottom}
        onChange={(x) => {
          const newContext = {
            ...context,
            frontAlignBottom: x.target.checked,
          };
          setContext(newContext);
          write(newContext);
        }}
      />

      <Form.Check
        type="checkbox"
        label="Front Align Right"
        checked={frontAlignRight}
        onChange={(x) => {
          const newContext = {
            ...context,
            frontAlignRight: x.target.checked,
          };
          setContext(newContext);
          write(newContext);
        }}
      />

      <Form.Check
        type="checkbox"
        label="Inside Align Bottom"
        checked={insideAlignBottom}
        onChange={(x) => {
          const newContext = {
            ...context,
            insideAlignBottom: x.target.checked,
          };
          setContext(newContext);
          write(newContext);
        }}
      />

      <Form.Check
        type="radio"
        label="1-panel"
        checked={type === JCardType.JP0}
        onChange={(x) => {
          const newContext = {
            ...context,
            type: x.target.checked ? JCardType.JP0 : JCardType.JP1,
          };
          setContext(newContext);
          write(newContext);
        }}
      />

      <Form.Check
        type="radio"
        label="2-panel"
        checked={type === JCardType.JP1}
        onChange={(x) => {
          const newContext = {
            ...context,
            type: x.target.checked ? JCardType.JP1 : JCardType.JP0,
          };
          setContext(newContext);
          write(newContext);
        }}
      />
    </div>
  );
};
