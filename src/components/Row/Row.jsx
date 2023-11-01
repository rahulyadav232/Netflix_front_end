import { useState, useEffect, } from "react";
import axios from "axios";
import Card from "../Card/Card";
import s from "./Row.module.css";

const Row = ({ title, url }) => {
  const [data, setData] = useState([]);
  const [currentScroll, setCurrentScroll] = useState(0);

  const fetchData = async () => {
    const localData = localStorage.getItem(title);
    if (title) {
      if (localData) {
        console.log("cache hit, loading from local storage");
        setData(JSON.parse(localData));
        return;
      }
    }
    console.log("cache miss API call");
    const result = await axios(url);
    setData(result.data.results);
    localStorage.setItem(title, JSON.stringify(result.data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollRight = () => {
    setCurrentScroll(currentScroll - 600);
  };

  const scrollLeft = () => {
    setCurrentScroll(currentScroll + 600);
  };

  return (
    <div className={s.row_wrapper}>
      <button
        style={{
          top: "50%",
          left: "0",
          zIndex: "100",
          backgroundColor: "white",
          color: "black",
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
        onClick={() => scrollRight()}
      >
        Scroll Right
      </button>
      <button
        style={{
          top: "50%",
          left: "0",
          zIndex: "100",
          backgroundColor: "white",
          color: "black",
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
        onClick={() => scrollLeft()}
      >
        Scroll Left
      </button>
      <h4 className={s.row_title}>{title}</h4>
      <div
        className={s.row_card}
        style={{
          whiteSpace: "nowrap", // Optional, for horizontal scrolling
          width: "100vw",
          transition: "all 0.5s ease",
          transform: `translateX(${currentScroll}px)`,
        }}
      >
        {data.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            title={el.title}
            isAdult={el.adult}
            backdropPath={el.backdrop_path}
            voteAverage={el.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;