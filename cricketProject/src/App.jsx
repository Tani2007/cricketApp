import { useEffect, useState } from "react";
import Cricket from "./Cricket";
import "./App.css";
export default function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=be9c0f98-9206-4c90-8e93-305df386950a&offset=0"
    );

    const data = await res.json();
    setData(data.data);
    console.log(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <Cricket data={data} />;
}
