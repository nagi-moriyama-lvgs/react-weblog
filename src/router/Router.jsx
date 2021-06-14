import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Articles } from "../components/pages/Articles";
import { HeaderFooter } from "../templates/HeaderFooter";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HeaderFooter>
            <Top />
          </HeaderFooter>
        </Route>
        <Route path="/articles">
          <HeaderLayout>
            <Articles />
          </HeaderLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
