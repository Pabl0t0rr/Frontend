"use client";

import { useEffect, useState } from "react";
import { getLocations } from "@/lib/api/location";
import { LocationResult } from "@/types/results";
import Paginador from "../components/Paginator";
import Location from "../components/Location";
const LocationsPage = () => {
  const [resultLocations, setResultLocations] = useState<LocationResult | null>(
    null,
  );
  const [location, setLocation] = useState<string>("");
  const [finalLocation, setFinalLocation] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getLocations(page, finalLocation)
      .then((e) => setResultLocations(e))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page, finalLocation]);
  return (
    <div>
      <h1>Locations Page</h1>
      <div className="locationFilter">
        <input
          placeholder="Search by name..."
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              setFinalLocation(location);
            }
          }}
        />
        <button onClick={() => setFinalLocation(location)}>Search Name</button>
      </div>
      {resultLocations &&
        resultLocations.results.map((e) => (
          <Location key={e.id} location={e} />
        ))}
      <Paginador
        next={!!resultLocations?.info.next}
        prev={!!resultLocations?.info.prev}
        page={page}
        setPage={(e) => setPage(e)}
      />
    </div>
  );
};

export default LocationsPage;
