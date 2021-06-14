import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <InputStyle type="text" placeholder={placeholder} />;
};

const InputStyle = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgray;
  outline: none;
`;
