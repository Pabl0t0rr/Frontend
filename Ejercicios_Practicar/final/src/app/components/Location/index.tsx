import { LocationT } from "@/types";

import "./styles.css";

const Location = ({ location }: { location: LocationT }) => {
  return (
    <div className="locationContainer">
      <h2>{location.name}</h2>
      <div className="locationInfo">
        <p>Type: {location.type}</p>
        <p>Dimension: {location.dimension}</p>
        <p>Number of residents: {location.residents.length}</p>
        <p>Created: {location.created.toString()}</p>
      </div>
    </div>
  );
};

export default Location;
