import { EpisodeT } from "@/types";

const Episode = ({ episode }: { episode: EpisodeT }) => {
  return (
    <div className="episodeContainer">
      <h1>Episode Page</h1>
      <p>Nombre: {episode.name}</p>
      <p>Fecha Emision: {episode.air_date}</p>
      <p>Episode: {episode.episode}</p>
    </div>
  );
};
export default Episode;
