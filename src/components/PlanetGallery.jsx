import { useEffect, useState } from "react";

import mercury from "../assets/images/mecury.jpg";
import venus from "../assets/images/venus.jpg";
import earth from "../assets/images/earth.jpg";
import mars from "../assets/images/mars.jpg";
import jupiter from "../assets/images/jupiter.jpg";
import saturn from "../assets/images/saturn.jpg";
import uranus from "../assets/images/uranus.jpg";
import neptune from "../assets/images/neptune.jpg";
import pluto from "../assets/images/pluto.jpg";

function PlanetGallery() {
  const [planets, setPlanets] = useState([]);

  const planetImages = {
    Mercury: mercury,
    Venus: venus,
    Earth: earth,
    Mars: mars,
    Jupiter: jupiter,
    Saturn: saturn,
    Uranus: uranus,
    Neptune: neptune,
    Pluto: pluto,
  };

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((response) => response.json())
      .then((data) => setPlanets(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section
      id="planet-gallery"
      style={{
        padding: "40px",
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>
        Planet Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {planets.map((planet, index) => (
          <figure
            key={index}
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <img
              src={planetImages[planet.planet]}
              alt={planet.planet}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <figcaption style={{ marginTop: "15px" }}>
              <h3>{planet.planet}</h3>

              <p>
                Distance from Sun: {planet.distanceFromSun} million km
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default PlanetGallery;