import React from "react";

function Statistics() {
  return (
    <div
      className="stats-ui"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "-webkit-fill-available",
        alignItems: "center",
      }}
    >
      <div
        className="stats-1"
        style={{ display: "flex", gap: 20, width: "100%" }}
      >
        <div
          className="st-1"
          style={{
            backgroundColor: "white",
            display: "flex",
            gap: 3,
            width: "24%",
            gap: 3,
            borderRadius: 8,
            marginLeft: 18,
          }}
        >
          <img src="" alt="stats" />
          <div
            className="details"
            style={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <span>Earning</span>
            <span>$198K</span>
            <span>37.8% this month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
