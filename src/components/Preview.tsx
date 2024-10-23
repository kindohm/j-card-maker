import { AppContext } from "../AppContext";
import { useAtomValue } from "jotai";

export const Preview = () => {
  const {
    backgroundColor,
    foregroundColor,
    front,
    inside,
    spine,
    back,
    fontSizeFront,
    fontSizeBack,
    fontSizeInside,
    fontSizeSpine,
  } = useAtomValue(AppContext);

  return (
    <svg
      width="6.875in"
      height="4.25in"
      style={{ border: "solid 1px black", background: "#ffffff" }}
    >
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`${backgroundColor}`}
      ></rect>

      <rect
        x="0.125in"
        y="0.125in"
        width="6.625in"
        height="4in"
        fill="#ffffff00"
        stroke="red"
        stroke-width="1"
      ></rect>

      <line
        x1="1.1875in"
        x2="1.1875in"
        y1="0.125in"
        y2="4.125in"
        stroke="red"
      ></line>
      <line
        x1="1.6875in"
        x2="1.6875in"
        y1="0.125in"
        y2="4.125in"
        stroke="red"
      ></line>
      <line
        x1="4.25in"
        x2="4.25in"
        y1="0.125in"
        y2="4.125in"
        stroke="red"
      ></line>

      <rect
        x="0.1875in"
        y="0.1875in"
        width="0.9375in"
        height="3.875in"
        fill="#ffffff00"
        stroke="red"
      ></rect>
      <rect
        x="1.25in"
        y="0.1875in"
        width="0.375in"
        height="3.875in"
        fill="#ffffff00"
        stroke="red"
      ></rect>
      <rect
        x="1.75in"
        y="0.1875in"
        width="2.4375in"
        height="3.875in"
        fill="#ffffff00"
        stroke="red"
      ></rect>
      <rect
        x="4.3125in"
        y="0.1875in"
        width="2.375in"
        height="3.875in"
        fill="#ffffff00"
        stroke="red"
      ></rect>

      <foreignObject
        width="4in"
        height="2in"
        transform="translate(100, 20) rotate(90)"
      >
        <div
          style={{
            color: `${foregroundColor}`,
            fontSize: `${fontSizeBack}in`,
            lineHeight: `${fontSizeBack}in`,
          }}
          dangerouslySetInnerHTML={{ __html: back }}
        ></div>
      </foreignObject>

      <foreignObject
        width="4in"
        height="2in"
        transform="translate(155, 20) rotate(90)"
      >
        <div
          style={{
            color: `${foregroundColor}`,
            fontSize: `${fontSizeSpine}in`,
            lineHeight: `${fontSizeSpine}in`,
          }}
          dangerouslySetInnerHTML={{ __html: spine }}
        ></div>
      </foreignObject>

      <foreignObject x="1.75in" y="0.1875in" width="2.4375in" height="3.5in">
        <div
          style={{
            color: `${foregroundColor}`,
            fontSize: `${fontSizeFront}in`,
            lineHeight: `${fontSizeFront}in`,
          }}
          dangerouslySetInnerHTML={{ __html: front }}
        ></div>
      </foreignObject>

      <foreignObject x="4.3125in" y="0.1875in" width="2.375in" height="3.5in">
        <div
          style={{
            color: `${foregroundColor}`,
            fontSize: `${fontSizeInside}in`,
            lineHeight: `${fontSizeInside}in`,
          }}
          dangerouslySetInnerHTML={{ __html: inside }}
        ></div>
      </foreignObject>
    </svg>
  );
};
