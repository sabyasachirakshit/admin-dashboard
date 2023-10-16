import React from "react";

export default function HeadBar() {
  return (
    <div
      className="head-bar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "-webkit-fill-available",
        paddingTop: 12,
      }}
    >
      <div
        className="greetings"
        style={{ height: "fit-content", marginLeft: "1%" }}
      >
        Hello sabya
      </div>
      <div className="searchbar" style={{ marginRight: "2%" }}>
        <input type="text" placeholder="search.." />
      </div>
    </div>
  );
}
