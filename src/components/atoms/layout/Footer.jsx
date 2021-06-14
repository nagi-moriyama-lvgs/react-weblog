import styled from "styled-components";

export const Footer = () => {
  return <FooterStyle>@copy; 2021 ginnan blog.</FooterStyle>;
};

const FooterStyle = styled.footer`
  background-color: white;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  line-height: 50px;
  text-align: center;
  color: gray;
  font-size: 0.8rem;
  position: fixed;
  bottom: 0;
`;
