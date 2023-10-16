import React from "react";
import { RadarChartOutlined } from "@ant-design/icons";
export default function LeftNavBar() {
  return (
    <div
      className="left-navbar"
      style={{
        width: "13.5%",
        minHeight: "100vh",
        backgroundColor: "blue",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="nav-title"
        style={{ paddingLeft: 46, paddingTop: 16, display: "flex", gap: 6 }}
      >
        <RadarChartOutlined style={{ fontSize: 24, paddingTop: 4 }} />
        <b style={{ fontSize: 24 }}>Dashboard</b>
      </div>
    </div>
  );
}
