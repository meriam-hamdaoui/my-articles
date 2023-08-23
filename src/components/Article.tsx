// this component shows an article object
import React from "react";
import { ArticleProps } from "../type";

export const Article = ({ article, removeArticle }: ArticleProps) => {
  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button>Delete</button>
    </div>
  );
};
