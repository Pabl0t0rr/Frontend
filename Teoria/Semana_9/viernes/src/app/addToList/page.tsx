"use client";

import { useList } from "@/context/listContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddToList = () => {
  const { addToList } = useList();
  const [inputText, setInputText] = useState("");
  const router = useRouter();

  return (
    <div>
      <h1>Agregar a la lista</h1>
      <button onClick={() => router.push("/")}>Para la principal</button>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addToList(inputText);
            setInputText("");
          }
        }}
      />
    </div>
  );
};

export default AddToList;
