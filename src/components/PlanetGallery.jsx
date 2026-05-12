import { useEffect, useState } from "react";
import "./PlanetGallery.css";

function PlanetGallery() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((response) => response.json())
      .then((planets) => {
        const fixedPlanets = planets.map((planet) => {
          const name = planet.planet.toLowerCase();

          let ext;

          if (name === "earth") ext = "jpg";
          else if (name === "mercury") ext = "webp";
          else ext = "webp";

          planet.image = `https://anurella.github.io/images/planets/${name}.${ext}`;
          if (name === "neptune") {
            planet.image = "https://placehold.co/400x250?text=Neptune+Image+Missing";
          }

          return planet;
        });

        setPlanets(fixedPlanets);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="planet-gallery" id="planet-gallery">
      <h2 className="gallery-title">
        Visualizing the Differences Between Planets
      </h2>

      <p className="gallery-description">
        Each planet in our solar system has unique physical characteristics.
        Visual comparisons help highlight how vastly different terrestrial
        planets are from gas giants and ice giants.
      </p>

      <div className="planet-grid">
        {planets.map((planet, index) => (
          <figure className="planet-card" key={index}>
            <img
              src={planet.image}
              alt={planet.planet}
              className="planet-image"
            />

            <figcaption className="planet-content">
              <h3 className="planet-name">{planet.planet}</h3>

              <p className="planet-distance">
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