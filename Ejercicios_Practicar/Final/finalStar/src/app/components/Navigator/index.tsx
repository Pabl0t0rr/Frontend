import Router from "next/navigation";
import Link from "next/link";

const NavigatorPage = () => {
  type Navigator = {
    name: string;
    link: string;
  };

  const enlaces: Navigator[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "People",
      link: "/people",
    },
    {
      name: "Films",
      link: "/films",
    },
    {
      name: "Planets",
      link: "/planets",
    },
  ];

  return (
    <div className="navigatorContainer">
      {enlaces.map((e) => (
        <Link className="navigatorLink" key={e.link} href={e.link}>
          {e.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigatorPage;
