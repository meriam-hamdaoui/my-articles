import { nanoid } from "nanoid";
import { ArticleState, ArticleAction, IArticle } from "../type";
import { ADD_ARTICLE, REMOVE_ARTICLE } from "./action-type";

const initialState: ArticleState = {
  articles: [
    {
      id: nanoid(),
      title: "article 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum eget magna at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quam diam, semper vitae ante id, viverra pharetra sem. Donec tempus ut diam vel placerat. In hac habitasse platea dictumst. Integer viverra eget lorem vel viverra. Curabitur sagittis, arcu vitae eleifend iaculis, dui dui sagittis nibh, congue imperdiet nisl eros id ex. Praesent quis aliquet diam. Duis gravida velit sed sollicitudin placerat.",
    },
    {
      id: nanoid(),
      title: "article 2",
      body: "Vivamus porttitor diam orci, ut porttitor ipsum fermentum sed. Cras diam nisl, lobortis eget iaculis ut, sollicitudin vel lacus. Proin ac ex eros. Donec dignissim luctus mauris, pulvinar vehicula ligula blandit at. Praesent eu leo tempor, vehicula nisi quis, suscipit libero. Sed vitae mi fringilla, dictum sapien at, rutrum nibh. Sed ipsum ex, sollicitudin sed semper eu, dapibus sit amet ligula. Curabitur tincidunt cursus lorem, eget condimentum mauris convallis ut. Mauris et dui condimentum, commodo justo ac, gravida nunc. Aliquam erat volutpat.",
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
