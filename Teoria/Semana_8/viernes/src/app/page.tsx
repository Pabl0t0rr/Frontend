"use client";

import { useRouter } from "next/navigation";
import { useList } from "@/context/listContext";
import "./page.css";

const Home = () => {
  const { list } = useList();
  const router = useRouter();

  return (
    <div className="listContainer">
      <h1>Hola Mundo</h1>
      <button onClick={() => router.push("/addToList")}>Cambiar pagina</button>
      {list.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default Home;
