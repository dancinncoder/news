import { useEffect, useState } from "react";
import "./App.css";
import { getArticle } from "./api/ArticleApi";
import { ArticleContext } from "./context/ArticleContext";
import AppRouter from "./shared/Router";

function App() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const cachedArticles = localStorage.getItem("articles");

      if (cachedArticles) {
        setArticleList(JSON.parse(cachedArticles));
      } else {
        try {
          const response = await getArticle();
          setArticleList(response?.data?.response?.docs);
        } catch (error) {
          console.error("Error fetching articles:", error);
        }
      }
    };
    fetchArticles();
  }, []);

  return (
    <ArticleContext.Provider value={{ articleList, setArticleList }}>
      <AppRouter articleList={articleList} setArticleList={setArticleList} />
    </ArticleContext.Provider>
  );
}

export default App;
