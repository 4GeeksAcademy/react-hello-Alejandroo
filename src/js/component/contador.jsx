import React from "react";
import ReactDOM from "react-dom/client";


const SecondsCounter = ({ seconds }) => {
  const padNumber = (num) => String(num).padStart(6, "0");
  const formattedSeconds = padNumber(seconds);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem", backgroundColor: "black", color: "white", padding: "20px" }}>
      <div style={{ margin: "0 5px" }}>⏳</div>
      {formattedSeconds.split("").map((digit, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            margin: "0 5px",
            backgroundColor: "white",
            color: "black",
            width: "50px",
            height: "80px",
            textAlign: "center",
            lineHeight: "80px",
            fontSize: "2rem",
            borderRadius: "5px",
          }}
        >
          {digit}
        </div>
      ))}
    </div>
  );
};

let seconds = 0;
const root = ReactDOM.createRoot(document.getElementById("app"));

setInterval(() => {
  root.render(<SecondsCounter seconds={seconds} />);
  seconds++;
}, 1000);