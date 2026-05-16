import spaceVideo from "../assets/space_video.mp4";

function InfoVideo() {
  return (
    <section
      style={{
        padding: "70px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#0b4f9c",
          marginBottom: "15px",
        }}
      >
        How Planetary Data Helps Us Understand Space
      </h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 60px",
          color: "#333333",
          fontSize: "18px",
          lineHeight: "1.6",
        }}
      >
        Planetary science goes beyond images. Comparing{" "}
        <strong style={{ color: "#0b4f9c" }}>mass</strong>,{" "}
        <strong style={{ color: "#0b4f9c" }}>diameter</strong>,{" "}
        <strong style={{ color: "#0b4f9c" }}>gravity</strong>, and{" "}
        <strong style={{ color: "#0b4f9c" }}>density</strong>, we gain insight
        into how planets form, behave, and interact within the solar system.
      </p>

      <div
        style={{
          maxWidth: "950px",
          margin: "0 auto",
          borderRadius: "28px",
          overflow: "hidden",
        }}
      >
        <video
          src={spaceVideo}
          autoPlay
          loop
          muted
          playsInline
          controls
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        ></video>
      </div>
    </section>
  );
}

export default InfoVideo;