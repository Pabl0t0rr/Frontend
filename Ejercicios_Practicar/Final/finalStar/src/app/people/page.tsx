"use client";
import "./styles.css";
import { useEffect, useState } from "react";
import { People } from "@/types";
import { getPeople } from "@/lib/api/people";
import Person from "../components/People";

const PeoplePage = () => {
  const [people, setPeople] = useState<People[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPeople()
      .then((data) => {
        setPeople(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="hola">
      {people && people.map((p) => <Person key={p.url} person={p} />)}
    </div>
  );
};

export default PeoplePage;
