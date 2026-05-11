import space1 from "../assets/images/space 1.jpg";
import space2 from "../assets/images/space 2.jpg";
import space3 from "../assets/images/space 3.jpg";
import space4 from "../assets/images/space 4.jpg";
import space5 from "../assets/images/space 5.jpg";
import space6 from "../assets/images/space 6.jpg";
import space7 from "../assets/images/space 7.jpg";
import space8 from "../assets/images/space 8.jpg";

function PlanetGallery() {
  const planets = [
    space1,
    space2,
    space3,
    space4,
    space5,
    space6,
    space7,
    space8,
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "15px",
          color: "#222",
        }}
      >
        Visualizing the Differences Between Planets
      </h2>

      <p
        style={{
          fontSize: "18px",
          color: "#555",
          maxWidth: "750px",
          margin: "0 auto 45px",
          lineHeight: "1.6",
        }}
      >
        Each planet in our solar system has unique characteristics that help us
        understand space better.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "28px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {planets.map((planet, index) => (
          <div
            key={index}
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src={planet}
              alt={`space ${index + 1}`}
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlanetGallery;