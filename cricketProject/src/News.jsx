import { useEffect, useState } from "react";
import "./news.css";
export function News() {
  const [news, setNews] = useState([]);
  const [input, setInput] = useState("mahakumbh");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=pub_67684ca2a34e20b9f2cc98c8608f8811e40b7&q=${input}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setNews(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log("hey");
      });
  }, [input]);

  function handleChange(e) {
    setInput(e.target.value);
    console.log(e.target.value);
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
        type="text"
        value={null}
        placeholder="search for latest news(mahakumbh)"
        onChange={handleChange}
      />
      <div className="grid">
        {news.map((curNews) => {
          return (
            <div key={curNews.article_id} className="news-container">
              <p>{curNews.title}</p>
              <img src={curNews.image_url} alt="news.image" />
              <p>{}</p>
              <a href={curNews.link} target="_blank">
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
