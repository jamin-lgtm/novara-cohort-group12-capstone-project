import { useEffect, useState } from "react";
import "./PlanetGallery.css";

function PlanetGallery() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((response) => response.json())
      .then((data) => setPlanets(data))
      .catch((error) => console.log(error));
  }, []);

  const getImageUrl = (imagePath) => {
  return `https://anurella.github.io/${imagePath.replace("../", "")}`;
};

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
              src={`https://anurella.github.io/images/${planet.image
                .split("/")
                .pop()}`}
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