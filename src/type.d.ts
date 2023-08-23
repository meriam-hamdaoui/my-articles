/*  in this file we define all the TypeScript types, 
which allows us to set types for our variables, function parameters, and so on.*/

// first thing we need to define the article object structure using the interface type
export interface IArticle {
  id: number;
  title: string;
  body: string;
}

// the save article function too, it has an article as an argument and returns nothing
export type SaveArticleProps = {
  saveArticle: (article: IArticle | any) => void;
};
