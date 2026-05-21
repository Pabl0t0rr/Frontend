import { LocationT } from "@/types";

const Location = ({ location }: { location: LocationT }) => {
  return (
    <div className="locationCard">
      <h2>{location.name}</h2>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
    </div>
  );
};

export default Location;
