// this component shows an article object
import React from "react";

export const Article = ({}) => {
  return (
    <div className="Article">
      <div>
        <h1>article title goes here</h1>
        <p>article body goes here</p>
      </div>
      <button>Delete</button>
    </div>
  );
};
