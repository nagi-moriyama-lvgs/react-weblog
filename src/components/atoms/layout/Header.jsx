import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderStyle>
      <LinkStyle to="/">Home</LinkStyle>
      <LinkStyle to="/articles">Articles</LinkStyle>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  background-color: white;
  height: 50px;
  padding: 0 20px;
`;

const LinkStyle = styled(Link)`
  color: black;
  line-height: 50px;
  margin: 0 10px;
`;
