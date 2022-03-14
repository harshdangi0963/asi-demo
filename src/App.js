import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "2625px",
          objectFit: "cover",
          padding: 0,
          margin: 0
        }}
        alt=""
        src={
          "https://firebasestorage.googleapis.com/v0/b/hyreme-f1997.appspot.com/o/big-min.jpg?alt=media&token=34776122-3219-488b-a520-70007227f3ad"
        }
      />
    </div>
  );
}
