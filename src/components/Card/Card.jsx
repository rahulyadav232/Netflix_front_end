import s from "./Card.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ title, isAdult, backdropPath, voteAverage, id }) => {
  const [isHover, setIsHover] = useState(false);
  const imageURL = `https://image.tmdb.org/t/p/w500${backdropPath}`;
  const youtubeUrl = `https://www.youtube.com/embed/`;
  const [video, setVideo] = useState(null);

  const get = async () => {
    const { data } = await axios.get(`/movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    });

    setVideo(data?.videos?.results[0]?.key);
  };

  useEffect(() => {
    get();
  }, [id]);

  console.log(video);

  return (
    <div
      className={s.card_wrapper}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {!isHover && <img src={imageURL} alt={`img-${id}`} />}
      {isHover && (
        <div className={s.card_info}>
          <iframe
            width="100%"
            height="100%"
            src={`${youtubeUrl}${video}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>{title}</h4>
          <div>
            <span
              style={{
                color: voteAverage > 7 ? "green" : "red",
              }}
            >
              Vote {Math.floor(voteAverage * 10)}%
            </span>
            <span>{isAdult ? "  A" : "  U/A"}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;