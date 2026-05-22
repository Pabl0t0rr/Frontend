import Link from "next/link";
import "./styles.css";
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
      {enlaces.map((e) => {
        return (
          <Link className="navLink" key={e.url} href={e.url}>
            {e.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigatorPage;
