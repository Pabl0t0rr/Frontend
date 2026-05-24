import Link from "next/link";
import "./styles.css";

const Navigator = () => {
  type list = {
    name: string;
    url: string;
  };

  const links: list[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Characters",
      url: "/characters",
    },
  ];

  return (
    <div className="navContainer">
      {links.map((e) => {
        return (
          <Link className="navLink" key={e.url} href={e.url}>
            {e.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigator;
