import Link from "next/link";

const NavigatorPage = () => {
  type NavItem = {
    name: string;
    url: string;
  };

  const enlaces: NavItem[] = [
    { name: "Home", url: "/" },
    { name: "Characters", url: "/characters" },
    { name: "Episodes", url: "/episodes" },
    { name: "Locations", url: "/locations" },
  ];
  return (
    <div className="navContainer">
      <h1 className="navTitle">Navigator</h1>
      {enlaces.map((e) => (
        <Link className="navLink" key={e.url} href={e.url}>
          {e.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigatorPage;
