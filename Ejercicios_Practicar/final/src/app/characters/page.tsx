"use client";

import { useEffect, useState } from "react";
import Paginador from "../components/Paginator";
import { CharacterResult } from "@/types";
import Character from "../components/Character";
import { getCharacters } from "@/lib/api/character";
import { AxiosError } from "axios";
import "./styles.css";
const CharacterPage = () => {
  const [resultCharacters, setresultCharacters] =
    useState<CharacterResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("");
  const [finalFilter, setFinalFilter] = useState<string>("");

  useEffect(() => {
    getCharacters(page, finalFilter)
      .then((e) => setresultCharacters(e))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page, finalFilter]);

  return (
    <div className="characterContainer">
      <h1>Character Page</h1>
      <div className="charaterFilter">
        <input
          onChange={(e) => setFilter(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              setFinalFilter(filter);
            }
          }}
          placeholder="Search by name..."
        />
        <button onClick={() => setFinalFilter(filter)}>Search Name</button>
      </div>

      {resultCharacters &&
        resultCharacters.results.map((e) => (
          <Character key={e.id} character={e} />
        ))}
      <Paginador
        next={!!resultCharacters?.info.next}
        prev={!!resultCharacters?.info.prev}
        page={page}
        setPage={(e) => setPage(e)}
      />
    </div>
  );
};

export default CharacterPage;
