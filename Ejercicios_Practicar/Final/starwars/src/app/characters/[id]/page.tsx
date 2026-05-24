"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CharacterT } from "@/types";
import { getCharacterById } from "@/lib/api/character";
import { AxiosError } from "axios";

const CharacterById = () => {
  const { id } = useParams();
  const [character, setCharacterD] = useState<CharacterT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCharacterById(id as string)
      .then((e) => setCharacterD(e.result.properties))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setLoading(false));
  });

  return (
    <div>
      {!loading && !error && character && (
        <>
          <h1>Name : {character?.name}</h1>
          <p>Name : {character?.birth_year}</p>
          <p>Name : {character?.eye_color}</p>
        </>
      )}
    </div>
  );
};

export default CharacterById;
