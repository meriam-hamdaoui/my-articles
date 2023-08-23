import React from "react";
import { useSelector } from "react-redux";
import { AddArticle } from "./components/AddArticle";
import { ArticleState, IArticle, DispatchType } from "./type";
import { Article } from "./components/Article";
import { addArticle, removeArticle } from "./store/action-creator";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

function App() {
  // listen to the articles state
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles
  );

  // initiate dispatch
  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );
  return (
    <main className="App">
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
}

export default App;
