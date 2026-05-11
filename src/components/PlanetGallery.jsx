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
        padding: "70px 40px",
        backgroundColor: "#f4f8ff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#1f4fa3",
          marginBottom: "15px",
        }}
      >
        Visualizing the Differences Between Planets
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 40px",
          color: "#555",
          fontSize: "15px",
          lineHeight: "1.7",
        }}
      >
        Each planet in our solar system has unique physical characteristics.
        Visual comparisons help highlight how vastly different terrestrial
        planets are from gas giants and ice giants.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {planets.map((planet, index) => (
          <figure
            key={index}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              padding: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={planetImages[planet.planet]}
              alt={planet.planet}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <figcaption style={{ marginTop: "15px" }}>
              <h3
                style={{
                  color: "#1f4fa3",
                  marginBottom: "10px",
                }}
              >
                {planet.planet}
              </h3>

              <p
                style={{
                  color: "#444",
                  fontSize: "14px",
                }}
              >
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