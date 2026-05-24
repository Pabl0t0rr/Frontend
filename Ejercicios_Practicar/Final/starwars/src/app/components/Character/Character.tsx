import { getCharacterById } from "@/lib/api/character";
import { CharacterRes, CharacterT } from "@/types";
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  character: CharacterRes;
};

const Character = ({ character }: Props) => {
  const [characterD, setCharacterD] = useState<CharacterT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    getCharacterById(character.uid)
      .then((e) => setCharacterD(e.result.properties))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setLoading(false));
  }, [character.uid]);

  return (
    <div>
      <button
        className=""
        onClick={() => router.push("/characters/" + character.uid)}
      >
        <h1> {characterD?.name} </h1>
      </button>
    </div>
  );
};

export default Character;
