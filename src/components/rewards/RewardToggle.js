import React, { useState } from "react";
import "./styles.css";

export default function redeemedToggle() {
  const [isRedeemed, setRedeemed] = useState("false");

  const handleToggle = () => {
    setRedeemed(!isRedeemed);
  };
  return (
    <div className={`app ${isRedeemed ? "danger" : ""}`}>
      <h1>Hello react</h1>
      <button onClick={handleToggle}>Toggle class</button>
    </div>
  );
}

const [isRedeemed, setRedeemed] = useState("false")

const handleToggle = () => {
  setRedeemed(!isRedeemed);
}

className={`app ${isRedeemed ? "danger" : ""}`}