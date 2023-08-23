// this a component contain a form so the user can add an article to his web page
import React from "react";
import { nanoid } from "nanoid";
import { IArticle, SaveArticleProps } from "../type";

export const AddArticle = ({ saveArticle }: SaveArticleProps) => {
  const [article, setArticle] = React.useState<IArticle | {}>(); // usestate to keep track of the input changes

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setArticle({
      ...article,
      [event.currentTarget.id]: event.currentTarget.value,
    });

  // submit function to lunch the save action
  const addNewArticles = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle({ id: nanoid(), ...article });
    console.log("first article => ", {
      id: nanoid(),
      ...article,
    });
  };

  return (
    <form className="Add-article" onSubmit={addNewArticles}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="body"
        id="body"
        placeholder="Description"
        onChange={handleChange}
      />
      <button type="submit" disabled={article === undefined ? true : false}>
        ADD
      </button>
    </form>
  );
};
