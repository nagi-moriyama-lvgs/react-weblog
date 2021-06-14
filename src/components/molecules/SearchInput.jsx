import styled from "styled-components";
import { TurquoiseButton } from "../atoms/button/TurquoiseButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SearchWrapper>
      <Input placeholder="input search words." />
      <TurquoiseButton>Search</TurquoiseButton>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  aligin-items: center;
  button {
    margin-left: 10px;
  }
`;
