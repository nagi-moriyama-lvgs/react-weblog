import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { ArticleCard } from "../organisms/article/ArticleCard";

export const Articles = () => {
  const articles = [...Array(10).keys()].map((value) => {
    return {
      id: value,
      image: "./logo192.png",
      genre: "React",
      date: "2021/01/01",
      title: `Atomic Design_${value}`,
    };
  });

  return (
    <ArticlesStyle>
      <h2>This is recent article page.</h2>
      <SearchInput />

      <ArticlesArea>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.id} />;
        })}
      </ArticlesArea>
    </ArticlesStyle>
  );
};

const ArticlesStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArticlesArea = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
