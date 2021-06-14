import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { TurquoiseButton } from "../atoms/button/TurquoiseButton";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/articles");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/articles");
  };

  return (
    <TopStyle>
      <h2>This is top page.</h2>
      <TurquoiseButton onClick={onClickAdmin}>管理者</TurquoiseButton>
      <br />
      <br />
      <TurquoiseButton onClick={onClickGeneral}>一般ユーザ</TurquoiseButton>
    </TopStyle>
  );
};

const TopStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
