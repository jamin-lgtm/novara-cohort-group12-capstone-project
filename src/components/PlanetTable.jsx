import React, { useEffect, useState } from "react";
import "./PlanetTable.css";
import PlanetBackground from "./SpaceBackground";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   planet Images 
  const planetImages = {
  Mercury: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
  Venus: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
  Earth: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
  Mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  Jupiter: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
  Saturn: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  Uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  Neptune: "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
  Pluto: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg"
};

/* We added planet details right here since the 
since our fetch API only returns the planet 
and the distance from the sun. */

const planetDetails = {
  Mercury: {
    category: "Terrestrial Planets",
    mass: "0.330",
    diameter: "4,878",
    density: "5427",
    gravity: "3.7",
    //discovered: "Known since antiquity",
  },
  Venus: {
    //category: "Terrestrial Planets",
    mass: "0.330",
    diameter: "4,878",
    density: "5427",
    gravity: "3.7",
    //discovered: "Known since antiquity",
  },
  Earth: {
    //category: "Terrestrial Planets",
    mass: "0.330",
    diameter: "4,878",
    density: "5427",
    gravity: "3.7",
    //discovered: "—",
  },
  Mars: {
    //category: "Terrestrial Planets",
    mass: "0.330",
    diameter: "4,878",
    density: "5427",
    gravity: "3.7",
    //discovered: "Known since antiquity",
  },
  Jupiter: {
    category: "Jovian Planets",
    subcategory: "Gas Giants",
    mass: "0.330",
    diameter: "4,878",
    density: "5427",
    gravity: "3.7",
    //discovered: "Known since antiquity",
  },
  Saturn: {
    //category: "Jovian Planets",
    //subcategory: "Gas Giants",
    mass: "0.330",
    diameter: "4,878",
    density: "5427",
    gravity: "3.7",
    //discovered: "Known since antiquity",
  },
  Uranus: {
    //category: "Jovian Planets",
    subcategory: "Ice Giants",
    mass: "0.330",
    diameter: "4,878",
    density: "5427",
    gravity: "3.7",
    //discovered: "1781 (William Herschel)",
  },
  Neptune: {
    //category: "Jovian Planets",
    //subcategory: "Ice Giants",
    mass: "0.330",
    diameter: "4,878",
    density: "5427",
    gravity: "3.7",
    //discovered: "1846 (Galle & d’Arrest)",
  },
  Pluto: {
    category: "Dwarf Planets",
    subcategory: "Dwarf Planets",
    mass: "0.330",
    diameter: "4,878",
    density: "5427",
    gravity: "3.7",
    //discovered: "1930 (Clyde Tombaugh)",
  },
};


  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await fetch(
          "https://anurella.github.io/json/planets.json"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch planet data");
        }
        const data = await res.json();
        setPlanets(data);
      } catch (err) {
        console.error("Error fetching planets:", err);
        setError("Unable to load planet data at the moment.");
      } finally {
        setLoading(false);
      }
    };
    fetchPlanets();
  }, []);

  if (loading) {
    return <p>Loading planets...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="planet-table-container">

      {/* Planetary Facts Table */}
      <section className="planet-table-section">

        <h2 className="planet-table-title">
          Planetary Facts at a Glance
        </h2>

        <p className="planet-table-subtitle">
          Below is a comparative table of major planets in our solar system. 
          The data highlights key physical properties used by astronomers and researchers worldwide.
        </p>
        <p className="planet-table-description">
          Data about the planets of our solar system (Planetary facts taken from NASA)
        </p>

        <table className="planet-table">
          <thead id="planet-table-first-header">
            <tr>
              <th scope="col" colSpan={2}></th>
              <th scope="col">Name</th>
              <th scope="col">Mass (10²⁴kg)</th>
              <th scope="col">Diameter (km)</th>
              <th scope="col">Density (kg/m³)</th>
              <th scope="col">Gravity (m/s²)</th>
              {/* <th scope="col">Discovered</th> */}
            </tr>
          </thead>

          {/* ✅ ONLY THIS PART CHANGED */}
          <tbody>
            {planets.map((planet) => {
              const details = planetDetails[planet.planet];

              return (
                <tr key={planet.planet}>
                  {details.category == "Terrestrial Planets" && (
                    <th colSpan={2} rowSpan={4} scope="rowgroup" className="category">
                      {details?.category}
                    </th>
                  )}
                  {details.category == "Jovian Planets" && (
                    <th rowSpan={4} colSpan={1} scope="rowgroup" className="category">
                      {details?.category}
                    </th>)
                  }
                  {details.subcategory == "Gas Giants" && (
                    <th rowSpan={2} colSpan={1} scope="rowgroup" className="subcategory">
                      {details?.subcategory}
                    </th>
                  )}
                  {details.subcategory == "Ice Giants" && (
                    <th rowSpan={2} colSpan={1} scope="rowgroup" className="subcategory">
                      {details?.subcategory}
                    </th>
                  )}
                  {details.category == "Dwarf Planets" && (
                    <th rowSpan={2} colSpan={2} scope="rowgroup" className="category">
                      {details?.category}
                    </th>
        
                  )}
                  
                  <td>{planet.planet}</td>
                  <td>{details?.mass}</td>
                  <td>{details?.diameter}</td>
                  <td>{details?.density}</td>
                  <td>{details?.gravity}</td>
                  {/* <td>{details?.discovered}</td> */}
                </tr>

            
              );
            })}
          </tbody>

        </table>

      </section>
    </div>
  );
};

export default PlanetList;