import { EpisodeT } from "@/types";
import "./styles.css";

const Episode = ({ episode }: { episode: EpisodeT }) => {
  return (
    <div className="episodeContainer">
      <h1>{episode.name}</h1>
      <div className="episodeInfo">
        <p>Episode: {episode.episode}</p>
        <p>Characters: {episode.characters.length}</p>
        <p>Fecha Emision: {episode.air_date}</p>
        <p>Created: {episode.created.toString()}</p>
      </div>
    </div>
  );
};
export default Episode;
