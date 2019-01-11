import { css } from "styled-components";
import { stripUnit } from "polished";

export const fluidType = (
  minFontSize,
  maxFontSize,
  minScreenSize,
  maxScreenSize,
  unit
) => {
  const minFontSizeInt = stripUnit(minFontSize);
  const maxFontSizeInt = stripUnit(maxFontSize);
  const minScreenSizeInt = stripUnit(minScreenSize);
  const maxScreenSizeInt = stripUnit(maxScreenSize);
  const diffBetweenFontSizes = maxFontSizeInt - minFontSizeInt;
  const diffBetweenScreenSizes = maxScreenSizeInt - minScreenSizeInt;

  console.log(maxScreenSizeInt);
  console.log(minScreenSizeInt);

  return css`
    font-size: ${minFontSize};

    @media (min-width: ${minScreenSize}) {
      font-size: calc(
        (${minFontSize} + ${diffBetweenFontSizes}) * (100vw - ${minScreenSize}) /
          ${diffBetweenScreenSizes}
      );
    }
  `;
};
