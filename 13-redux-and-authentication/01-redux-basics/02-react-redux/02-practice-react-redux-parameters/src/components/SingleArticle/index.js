import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./SingleArticle.css";

const SingleArticle = () => {
  const { id } = useParams();
  const articles = useSelector((state) => state.articleState.entries);
  const [article, setArticle] = useState({});

  useEffect(() => {
    const matchArticle = articles?.find((article) => article.id === id);
    
    setArticle(matchArticle);
  }, [articles, id]);

  return (
    <div className="singleArticle">
      <h1>{article?.title}</h1>
      <img src={article?.imageUrl} alt="home" />
      <p>{article?.body}</p>
    </div>
  );
};

export default SingleArticle;
