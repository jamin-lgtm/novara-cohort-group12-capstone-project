import spaceVideo from "../assets/space_video.mp4";

function InfoVideo() {
  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2>How Planetary Data Helps Us Understand Space</h2>

      <div
        style={{
          maxWidth: "700px",
          margin: "30px auto",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        <video
          src={spaceVideo}
          autoPlay
          loop
          muted
          controls
          style={{
            width: "100%",
            display: "block",
          }}
        ></video>
      </div>
    </section>
  );
}

export default InfoVideo;