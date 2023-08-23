import { AddArticle } from "./components/AddArticle";

function App() {
  const saveArticle = () => {};

  return (
    <main className="App">
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
    </main>
  );
}

export default App;
