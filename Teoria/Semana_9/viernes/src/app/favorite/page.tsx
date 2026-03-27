"use client";

import { useList } from "@/context/listContext";
import { useRouter } from "next/navigation";

const FavoritePage = () => {
  const { list } = useList();
  const router = useRouter();

  return (
    <div>
      <h1>Favoritos</h1>
      <button onClick={() => router.push("/")}>Ir a la principal</button>
      <p>Bebidas favoritas</p>
      {list.map((fav) => {
        return <p key={fav}>{fav}</p>;
      })}
    </div>
  );
};

export default FavoritePage;
