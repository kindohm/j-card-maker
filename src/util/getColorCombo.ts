import colorable from "colorable";

const rand255 = () => {
  return Math.floor(Math.random() * 255);
};

const randHex = () => rand255().toString(16).padStart(2, "0");

const randHexColor = () => `#${randHex()}${randHex()}${randHex()}`;

export const getColorCombo = (): { foreground: string; background: string } => {
  const randColors = new Array(10).fill(null).reduce((acc, col, i) => {
    return { ...acc, [`color${i}`]: randHexColor() };
  }, {});

  const result = colorable(randColors, { compact: true, threshold: 0 });

  const ideals = result
    .map(
      (c: {
        hex: string;
        combinations: { hex: string; accessibility: { aaa: boolean } }[];
      }) => {
        const match = c.combinations.find(
          (cc) => cc.accessibility.aaa === true
        );
        if (!match) return null;
        const foreground = c.hex;
        const background = match.hex;
        return { foreground, background };
      }
    )
    .filter((x) => !!x);

  if (ideals.length === 0) {
    return getColorCombo();
  }

  return ideals[0];
};

// const { foreground, background } = getCombo();
