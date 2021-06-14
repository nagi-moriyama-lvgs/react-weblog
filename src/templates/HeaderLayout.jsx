import { Header } from "../components/atoms/layout/Header";

export const HeaderLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
