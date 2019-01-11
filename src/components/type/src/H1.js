import styled from "styled-components";
import { fluidType } from "../../../functions";

export const H1 = styled.h1`
  ${({ min, max, minScreenSize, maxScreenSize }) =>
    fluidType(min, max, minScreenSize, maxScreenSize)};
`;
