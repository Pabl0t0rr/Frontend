"use client";

import { getSimpleCharacters } from "@/features/characters/queries";
import {
  GetSimpleCharactersQuery,
  GetSimpleCharactersQueryVariables,
} from "@/gql/graphql";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const Home = () => {
  const { data, loading, error } = useQuery<
    GetSimpleCharactersQuery,
    GetSimpleCharactersQueryVariables
  >(getSimpleCharacters);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Characters</h1>
      <div>
        {data?.characters?.results?.map((character) => (
          <p key={character?.id}>{character?.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
