import styled from "styled-components";
import { BasicButtonStyle } from "./BasicButtonStyle";

export const GrayButton = (props) => {
  const { children } = props;
  return <GrayButtonStyle>{children}</GrayButtonStyle>;
};

const GrayButtonStyle = styled(BasicButtonStyle)`
  background-color: white;
  color: gray;
  border: 1px solid gray;
  border-radius: 999px;
  font-size: 0.5rem;
  padding: 3px 5px;
`;
