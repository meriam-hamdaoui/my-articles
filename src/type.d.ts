/*  in this file we define all the TypeScript types, 
which allows us to set types for our variables, function parameters, and so on.*/

// first thing we need to define the article object structure using the interface type
export interface IArticle {
  id: string;
  title: string;
  body: string;
}

// the save article function too, it has an article as an argument and returns nothing
export type SaveArticleProps = {
  saveArticle: (article: IArticle | any) => void;
};

export type ArticleProps = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

export type ArticleAction = {
  type: string;
  article: IArticle;
};

export type ArticleState = {
  articles: IArticle[];
};

export type DispatchType = (args: ArticleAction) => ArticleAction;
