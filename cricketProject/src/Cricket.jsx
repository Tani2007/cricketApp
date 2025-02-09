import React, { useEffect, useState } from "react";
import "./App.css";

const Cricket = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const res = await fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=be9c0f98-9206-4c90-8e93-305df386950a&offset=0"
    );

    const data = await res.json();
    setData(data.data);
    setIsLoading(false);
    console.log(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <div className="loadingBody">
        <h1 className="h-1">Loading...</h1>
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="back">
      <div class="logo-section">
        <img class="logo" src="logo.png" alt="" /> <span>CRICBUZZ</span>
      </div>
      <h1 className="heading-1">ALL Live Matches</h1>
      <div className="container">
        {data.map((curElem) => {
          return (
            <div className="playerstat">
              <h2>{curElem.name}</h2>
              <div className="teamData">
                {curElem.teams.map((curData) => {
                  return <p>{curData}</p>;
                })}
                {curElem.score.map((curScore) => {
                  return (
                    <>
                      <p>
                        {curScore.r}/{curScore.w}
                      </p>
                    </>
                  );
                })}
                {curElem.score.map((curScore) => {
                  return (
                    <>
                      <p>{curScore.o}</p>
                    </>
                  );
                })}
              </div>
              <h3>{curElem.status}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cricket;
