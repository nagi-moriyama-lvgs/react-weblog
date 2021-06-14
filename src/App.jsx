import { TurquoiseButton } from "./components/atoms/button/TurquoiseButton";
import { GrayButton } from "./components/atoms/button/GrayButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { ArticleCard } from "./components/organisms/article/ArticleCard";
import { Header } from "./templates/Header";
export function App() {
  const article = {
    image: "./logo192.png",
    genre: "React",
    date: "2021/01/01",
    title: "Atomic Design",
  };
  return (
    <Header>
      <h1>This is first page.</h1>
      <TurquoiseButton>test</TurquoiseButton>
      <GrayButton>test2</GrayButton>
      <br />
      <br />
      <SearchInput></SearchInput>
      <br />
      <br />
      <ArticleCard article={article} />
    </Header>
  );
}
