import { useEffect, useState } from "react";

function PlanetGallery() {
  const [planets, setPlanets] = useState([]);

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
        padding: "80px 20px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          fontWeight: "700",
          color: "#0b3d91",
          marginBottom: "20px",
        }}
      >
        Visualizing the Differences Between Planets
      </h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 50px auto",
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#555",
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
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {planets.map((planet, index) => (
          <figure
            key={index}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={`https://anurella.github.io/${planet.image.replace("../", "")}`}
              alt={planet.planet}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <figcaption
              style={{
                padding: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  color: "#0b3d91",
                  marginBottom: "10px",
                }}
              >
                {planet.planet}
              </h3>

              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
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