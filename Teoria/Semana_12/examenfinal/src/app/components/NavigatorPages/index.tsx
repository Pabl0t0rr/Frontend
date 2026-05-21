import Link from "next/link";
import "./styles.css";

const NavigatiorPages = () => {
  type Link = {
    name: string;
    link: string;
  };

  const enlaces: Link[] = [
    { name: "Home", link: "/" },
    { name: "Personajes", link: "/characters" },
    { name: "Lugares", link: "/locations" },
    { name: "Episodios", link: "/episodes" },
  ];

  return (
    <div className="NavigatorContainer">
      {enlaces.map((e) => {
        return (
          <Link className="NavigatorLink" key={e.link} href={e.link}>
            {e.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigatiorPages;
