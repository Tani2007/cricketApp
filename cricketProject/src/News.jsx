import { useEffect, useState } from "react";
import "./news.css";
export function News() {
  const [news, setNews] = useState([]);
  const [input, setInput] = useState("modi");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.worldnewsapi.com/search-news?text=${input}&language=en&earliest-publish-date=2025-02-05&api-key=573b95fdcd8b48cc85e7da5ed41d7b17`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.news);
        setNews(data.news);
        setLoading(false);
      })
      .catch((err) => {
        console.log("hey");
      });
  }, [input]);

  function handleChange(e) {
    let timerOut = setTimeout(() => {
      setInput(e.target.value);
      console.log(e.target.value);
    }, 3000);
    return () => clearTimeout(timerOut);
  }

  if (loading) {
    return (
      <div className="loadingBody">
        <h1 className="h-1">Loading...</h1>
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="body">
      <h1 className="newsHeading">Newz hub</h1>
      <input
        className="inputNews"
        type="text"
        value={null}
        placeholder="search for latest news(mahakumbh)"
        onChange={handleChange}
      />
      <div className="grid">
        {news.map((curNews) => {
          return (
            <div key={curNews.id} className="news-container">
              <p className="news-title">{curNews.title}</p>
              <img src={curNews.image} alt="news.image" />
              <p>{curNews.text}</p>
              <a href={curNews.url} target="_blank">
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
