"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { People } from "@/types";
import { getPeopleById } from "@/lib/api/people";

const PersonId = () => {
  const { id } = useParams<{ id: string }>();

  const [person, setPerson] = useState<People | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    getPeopleById(id)
      .then((data) => setPerson(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!person) return <div>No person found</div>;

  return (
    <div>
      <h1>{person.name}</h1>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <p>Hair color: {person.hair_color}</p>
      <p>Skin color: {person.skin_color}</p>
      <p>Eye color: {person.eye_color}</p>
      <p>Birth year: {person.birth_year}</p>
      <p>Gender: {person.gender}</p>
    </div>
  );
};

export default PersonId;
