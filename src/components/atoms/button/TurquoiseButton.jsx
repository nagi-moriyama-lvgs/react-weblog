import styled from "styled-components";
import { BasicButtonStyle } from "./BasicButtonStyle";

export const TurquoiseButton = (props) => {
  const { children, onClick } = props;
  return (
    <TurquoiseButtonStyle onClick={onClick}>{children}</TurquoiseButtonStyle>
  );
};

const TurquoiseButtonStyle = styled(BasicButtonStyle)`
  background-color: turquoise;
`;
