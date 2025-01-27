import React from "react";

const Cricket = ({ data }) => {
  return (
    <div className="back">
      <div class="logo-section">
        <img class="logo" src="logo.png" alt="" /> <span>CRICBUZZ</span>
      </div>
      <h1>Live Matches</h1>
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
