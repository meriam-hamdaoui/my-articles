import { IArticle, ArticleAction, DispatchType } from "../type";
import { ADD_ARTICLE, REMOVE_ARTICLE } from "./action-type";

export const addArticle = (article: IArticle, dispatch: DispatchType) => {
  const action: ArticleAction = {
    type: ADD_ARTICLE,
    article,
  };
  dispatch(action);
};
export const removeArticle = (article: IArticle, dispatch: DispatchType) => {
  const action: ArticleAction = {
    type: REMOVE_ARTICLE,
    article,
  };
  dispatch(action);
};
