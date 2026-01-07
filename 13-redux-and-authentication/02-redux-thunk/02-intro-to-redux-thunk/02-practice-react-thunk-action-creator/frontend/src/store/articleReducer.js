const LOAD_ARTICLES = "article/loadArticles";
const ADD_ARTICLE = "article/addArticle";

export const fetchArticles = () => {
  return async (dispatch) => {
    const response = await fetch("/api/articles");
    if (response.ok) {
      const articles = await response.json();
      dispatch(loadArticles(articles));
      return articles;
    }
  };
};

export const writeArticle = (article) => {
  return async (dispatch) => {
    const response = await fetch("/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(addArticle(data));
      return data;
    }
  };
};

export const loadArticles = (articles) => {
  return {
    type: LOAD_ARTICLES,
    articles,
  };
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article,
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;
