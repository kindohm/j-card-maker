import { AppContext } from "../AppContext";
import { useAtomValue } from "jotai";
import { useRef } from "react";

export const Preview2Panel = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const {
    backgroundColor,
    foregroundColor,
    front,
    frontAlignBottom,
    frontAlignRight,
    inside,
    insideAlignBottom,
    spine,
    back,
    fontSizeFront,
    fontSizeBack,
    fontSizeInside,
    fontSizeSpine,
    showBounds,
  } = useAtomValue(AppContext);

  const insideStyleBase: React.CSSProperties = {
    color: `${foregroundColor}`,
    fontSize: `${fontSizeInside}in`,
    lineHeight: `${fontSizeInside}in`,
    position: "absolute",
  };

  const frontStyleBase: React.CSSProperties = {
    color: `${foregroundColor}`,
    fontSize: `${fontSizeFront}in`,
    lineHeight: `${fontSizeFront}in`,
    position: "absolute",
    width: "2.4375in",
  };

  let insideStyle: React.CSSProperties = insideStyleBase;
  if (insideAlignBottom) {
    insideStyle = { ...insideStyle, bottom: 0 };
  }

  let frontStyle: React.CSSProperties = frontStyleBase;
  if (frontAlignBottom) {
    frontStyle = { ...frontStyle, bottom: 0 };
  }

  if (frontAlignRight) {
    frontStyle = { ...frontStyle, textAlign: "right" };
  }

  return (
    <>
      <svg
        ref={svgRef}
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

        {showBounds && (
          <g>
            <rect
              x="0.125in"
              y="0.125in"
              width="6.625in"
              height="4in"
              fill="#ffffff00"
              stroke="red"
              strokeWidth="1"
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
          </g>
        )}
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

        <foreignObject
          x="1.75in"
          y="0.1875in"
          width="2.6875in"
          height="3.875in"
        >
          <div
            style={frontStyle}
            dangerouslySetInnerHTML={{ __html: front }}
          ></div>
        </foreignObject>

        <foreignObject
          x="4.3125in"
          y="0.1875in"
          width="2.375in"
          height="3.875in"
        >
          <div
            style={insideStyle}
            dangerouslySetInnerHTML={{ __html: inside }}
          ></div>
        </foreignObject>
      </svg>
    </>
  );
};
