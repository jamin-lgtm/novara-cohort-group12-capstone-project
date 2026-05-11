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
      .then((data) => {
        setPlanets(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section
      id="planet-gallery"
      style={{
        padding: "80px 20px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#1e4fa3",
          fontSize: "40px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Visualizing the Differences Between Planets
      </h2>

      <p
        style={{
          color: "#555",
          maxWidth: "900px",
          margin: "0 auto 50px",
          fontSize: "18px",
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
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              paddingBottom: "20px",
            }}
          >
            <img
              src={planetImages[planet.planet]}
              alt={planet.planet}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <figcaption style={{ padding: "15px" }}>
              <h3
                style={{
                  color: "#1e4fa3",
                  marginBottom: "10px",
                  fontSize: "24px",
                }}
              >
                {planet.planet}
              </h3>

              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
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