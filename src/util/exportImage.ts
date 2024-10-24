import saveAs from "file-saver";

export const exportImage = (svgRef) => {
  if (!svgRef.current) {
    console.warn("no ref!");
    return;
  }

  // Assume we have an SVG element in our HTML
  const svgElem: SVGSVGElement = svgRef.current; // document.querySelector("svg");

  // Convert SVG to XML
  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(svgElem);

  // Convert XML to Image and draw on canvas
  const img = new Image();
  img.src = "data:image/svg+xml;base64," + window.btoa(source);

  img.onload = function () {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.warn("no context!");
      return;
    }
    ctx.drawImage(img, 0, 0);

    canvas.toBlob((blob) => {
      if (!blob) {
        console.warn("no blob!");
        return;
      }
      saveAs(blob, "pretty image.png");
    });
  };
};
