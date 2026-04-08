"use client";

import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <button
        onClick={() => {
          document.cookie = "isLegal=true; path=/";
        }}
      >
        Soy legal
      </button>

      <button
        onClick={() => {
          document.cookie =
            "isLegal=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        }}
      >
        Soy ilegal
      </button>

      <Link href="/importante">Ir a la página importante</Link>
    </div>
  );
};

export default Home;
