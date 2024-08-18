import axios from "axios";

// Get article data
export const getArticle = async () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching article data:", error);
    return null;
  }
};
