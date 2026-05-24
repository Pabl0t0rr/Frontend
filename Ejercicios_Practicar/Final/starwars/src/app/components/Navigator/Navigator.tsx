import Link from "next/link";

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
    <div>
      <h1>Navigator</h1>
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
