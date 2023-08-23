import { nanoid } from "nanoid";
import { ArticleState, ArticleAction, IArticle } from "../type";
import { ADD_ARTICLE, REMOVE_ARTICLE } from "./action-type";

const initialState: ArticleState = {
  articles: [
    {
      id: nanoid(),
      title: "article 1",
      body: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: nanoid(),
      title: "article 2",
      body: "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ADD_ARTICLE:
      const newArticle: IArticle = {
        id: nanoid(), // not really unique
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      };
  }
  return state;
};

export default reducer;
