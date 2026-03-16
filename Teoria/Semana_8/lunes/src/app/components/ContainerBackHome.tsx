import { useRouter } from "next/navigation";
import "./ContainerBackHome.css";
import React from "react";

type Props = {
  children: React.ReactNode;
  setPulsado: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContainerBackHome = ({ children, setPulsado }: Props) => {
  const router = useRouter();

  return (
    <div className="container">
      <div
        className="innerContainer"
        onClick={(e) => {
          e.stopPropagation();
          setPulsado(false);
        }}
      >
        <button
          onClick={() => {
            setPulsado(false);
            router.push("/");
          }}
        >
          Volver a Home
        </button>
        {children}
      </div>
    </div>
  );
};

export default ContainerBackHome;
