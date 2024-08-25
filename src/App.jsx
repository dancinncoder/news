import { useEffect, useState } from "react";
import "./App.css";
import { getArticle } from "./api/ArticleApi";
import { ArticleContext } from "./context/ArticleContext";
import AppRouter from "./shared/Router";
import { SlugContext } from "./context/SlugContext";

function App() {
  const actionNavItemList = [
    { label: "Home", slug: "/" },
    { label: "Charts", slug: "/charts" },
    { label: "Interactive Assets", slug: "/interactive-assets" },
    // { label: "Table", slug: "/table" },
    // { label: "Video", slug: "/video" },
    // { label: "3D Assets", slug: "/3d-assets" },
  ];

  const [articleList, setArticleList] = useState([]);
  const [slugList, setSlugList] = useState(actionNavItemList);

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
      <SlugContext.Provider value={{ slugList, setSlugList }}>
        <AppRouter articleList={articleList} setArticleList={setArticleList} />
      </SlugContext.Provider>
    </ArticleContext.Provider>
  );
}

export default App;
