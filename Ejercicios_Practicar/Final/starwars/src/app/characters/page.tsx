"use client";

import { useEffect, useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import { resultCharacterT } from "../../types";
import { getCharacters } from "@/lib/api/character";
import { AxiosError } from "axios";
import Character from "../components/Character/Character";

const CharacterPage = () => {
  const [characters, setCharacters] = useState<resultCharacterT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [filter, setFilter] = useState<string>("");
  const [finalFilter, setFinalFilter] = useState<string>("");

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getCharacters(page)
      .then((e) => setCharacters(e))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page, finalFilter]);

  return (
    <div className="caracterPageContainer">
      <h1>Character page</h1>

      {characters &&
        characters.results.map((e) => <Character key={e.uid} character={e} />)}

      <Pagination
        next={!!characters?.next}
        prev={!!characters?.previous}
        page={page}
        setPage={(e) => setPage(e)}
      />
    </div>
  );
};

export default CharacterPage;
