import styled from "styled-components";
import { GrayButton } from "../../atoms/button/GrayButton";
import { UserContext } from "../../../providers/UserProvider";
import { useContext } from "react";

export const ArticleCard = (props) => {
  const { article } = props;
  const { userInfo } = useContext(UserContext);
  const showState = userInfo ? userInfo.isAdmin : false;
  return (
    <ArticleCardStyle>
      {showState && (
        <img width={100} height={100} src={article.image} alt="article" />
      )}
      <div className="article__detail">
        <GrayButton>{article.genre}</GrayButton>
        <div className="article__detail__date">{article.date}</div>
      </div>
      <div className="title">{article.title}</div>
    </ArticleCardStyle>
  );
};

const ArticleCardStyle = styled.div`
  background-color: white;
  width: 150px;
  padding: 20px 10px;
  img {
    display: block;
    margin: 20px auto;
  }
  .article__detail {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    &__date {
    }
  }
  .title {
    margin-top: 10px;
  }
`;
