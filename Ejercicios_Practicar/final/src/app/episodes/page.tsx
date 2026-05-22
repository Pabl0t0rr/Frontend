"use client";

import { getEpisodes } from "@/lib/api/episode";
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import Paginador from "../components/Paginator";
import { EpisodeResult } from "@/types";
import Episode from "../components/Episode";
import "./styles.css";

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState<EpisodeResult | null>(null);
  const [numberEpisode, setNumberEpisode] = useState<string>("");
  const [finalNumberEpisode, setFinalNumberEpisode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getEpisodes(page, finalNumberEpisode)
      .then((e) => setEpisodes(e))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page, finalNumberEpisode]);

  return (
    <div className="episodeMainContainer">
      <h1>Episode Page</h1>
      <div className="episodeFilter">
        <input
          onChange={(e) => setNumberEpisode(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              setFinalNumberEpisode(numberEpisode);
            }
          }}
          placeholder="Search by number of episode..."
        />
        <button onClick={() => setFinalNumberEpisode(numberEpisode)}>
          Search Name
        </button>
      </div>

      {episodes &&
        episodes.results.map((e) => <Episode key={e.id} episode={e} />)}
      <Paginador
        next={!!episodes?.info.next}
        prev={!!episodes?.info.prev}
        page={page}
        setPage={(e) => setPage(e)}
      />
    </div>
  );
};
export default EpisodesPage;
