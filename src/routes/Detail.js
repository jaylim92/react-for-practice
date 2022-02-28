import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getDetail = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
    };
    getDetail();
  }, [id]);
  console.log(movie);
  return (
    <div>
      {movie.map((movie) => {
        <h1 key={movie.title}>{movie.title}</h1>;
      })}
    </div>
  );
}

export default Detail;
