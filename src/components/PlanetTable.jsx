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
    diameter: "4,879",
    density: "5427",
    gravity: "3.7",
    discovered: "Known since antiquity",
  },
  Venus: {
    category: "Terrestrial Planets",
    mass: "4.87",
    diameter: "12,104",
    density: "5243",
    gravity: "8.9",
    discovered: "Known since antiquity",
  },
  Earth: {
    category: "Terrestrial Planets",
    mass: "5.97",
    diameter: "12,756",
    density: "5514",
    gravity: "9.8",
    discovered: "—",
  },
  Mars: {
    category: "Terrestrial Planets",
    mass: "0.642",
    diameter: "6,792",
    density: "3933",
    gravity: "3.7",
    discovered: "Known since antiquity",
  },
  Jupiter: {
    category: "Gas Giants",
    mass: "1898",
    diameter: "142,984",
    density: "1326",
    gravity: "23.1",
    discovered: "Known since antiquity",
  },
  Saturn: {
    category: "Gas Giants",
    mass: "568",
    diameter: "120,536",
    density: "687",
    gravity: "9.0",
    discovered: "Known since antiquity",
  },
  Uranus: {
    category: "Ice Giants",
    mass: "86.8",
    diameter: "51,118",
    density: "1271",
    gravity: "8.7",
    discovered: "1781 (William Herschel)",
  },
  Neptune: {
    category: "Ice Giants",
    mass: "102",
    diameter: "49,528",
    density: "1638",
    gravity: "11.0",
    discovered: "1846 (Galle & d’Arrest)",
  },
  Pluto: {
    category: "Dwarf Planets",
    mass: "0.0146",
    diameter: "2,377",
    density: "1850",
    gravity: "0.7",
    discovered: "1930 (Clyde Tombaugh)",
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
    <>

      {/* Planetary Facts Table */}
      <section className="planet-table-section">

    <h2 className="planet-table-title">
      Planetary Facts at a Glance
    </h2>

    <p className="planet-table-subtitle">
      Compare planetary properties across our solar system.
    </p>

    <table className="planet-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Name</th>
          <th>Mass</th>
          <th>Diameter</th>
          <th>Density</th>
          <th>Gravity</th>
          <th>Discovered</th>
        </tr>
      </thead>

      {/* ✅ ONLY THIS PART CHANGED */}
      <tbody>
        {planets.map((planet) => {
          const details = planetDetails[planet.planet];

          return (
            <tr key={planet.planet}>
              <td className="category">{details?.category}</td>
              <td>{planet.planet}</td>
              <td>{details?.mass}</td>
              <td>{details?.diameter}</td>
              <td>{details?.density}</td>
              <td>{details?.gravity}</td>
              <td>{details?.discovered}</td>
            </tr>
          );
        })}
      </tbody>

    </table>

  </section>
    </>
  );
};

export default PlanetList;