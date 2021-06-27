import React, {useEffect, useState} from 'react';
import PlaceholderArt from '../placeholders/PlaceholderArt';

const Article = () => {
  const [articles, setArticles] = useState (null);
  useEffect (() => {
    setTimeout (async () => {
      const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json ();
      setArticles (data);
    }, 5000);
  });

  return (
    <div className="articles">
      <h2>articles</h2>

      {!articles &&
        [1, 2, 3, 4, 5].map (n => {
          return <PlaceholderArt key={n} theme="dark" />;
        })}
      {articles &&
        articles.map (article => {
          return (
            <div key={article.id} className="article">
              <h3 className="font-bold">{article.title}</h3>
              <p>{article.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Article;
