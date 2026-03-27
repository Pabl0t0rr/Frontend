"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ListContextType = {
  list: string[];
  addToList: (item: string) => void;
  deleteFromList: (item: string) => void;
};

const ListaContext = createContext<ListContextType | null>(null);

export const ListaProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<string[]>([]); //Tiene que llamarse igual que el valor del contexto

  useEffect(() => {
    const storage = localStorage.getItem("listilla");
    if (storage) {
      setList(storage.split(","));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listilla", String(list));
  }, [list]);

  const addToList = (item: string) => {
    setList([...list, item]);
  };

  const deleteFromList = (item: string) => {
    setList(list.filter((i) => i !== item));
  };

  return (
    <ListaContext.Provider value={{ list, addToList, deleteFromList }}>
      {children}
    </ListaContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useList = () => {
  const context = useContext(ListaContext);
  if (!context) {
    throw new Error("useList debe ser usado dentro de un ListaProvider");
  }
  return context;
};
