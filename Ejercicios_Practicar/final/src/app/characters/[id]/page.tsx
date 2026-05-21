"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CharacterT } from "@/types";
import { getCharacterbyId } from "@/lib/api/character";
import { AxiosError } from "axios";
const CharcaterById = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<CharacterT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCharacterbyId(Number(id))
      .then((e) => setCharacter(e))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setLoading(false));
  });

  return (
    <div>
      {!loading && !error && character && (
        <>
          <h1>{character?.name}</h1>
        </>
      )}
      {loading && <p>Loding...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};
export default CharcaterById;
