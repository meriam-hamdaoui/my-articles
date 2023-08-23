// this component shows an article object
import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ArticleProps, IArticle } from "../type";

export const Article = ({ article, removeArticle }: ArticleProps) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = React.useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  );
};
