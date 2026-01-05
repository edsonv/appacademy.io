import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import { loadArticles } from "../../store/articleReducer";
import SingleArticle from "../SingleArticle";

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articleState.entries);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map((article) => (
          <li>
            <NavLink to={`/article/${article.id}`} key={article.id}>
              {article.title}
            </NavLink>
          </li>
        ))}
      </ol>

      <Switch>
        <Route path="/article/:id">
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
