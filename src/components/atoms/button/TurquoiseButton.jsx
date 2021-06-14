import styled from "styled-components";
import { BasicButtonStyle } from "./BasicButtonStyle";

export const TurquoiseButton = (props) => {
  const { children } = props;
  return <TurquoiseButtonStyle>{children}</TurquoiseButtonStyle>;
};

const TurquoiseButtonStyle = styled(BasicButtonStyle)`
  background-color: turquoise;
`;
