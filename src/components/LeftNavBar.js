import React from "react";
import { RadarChartOutlined, RightOutlined } from "@ant-design/icons";
import "./leftnav.css";
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

      <div
        className="nav-elements"
        style={{
          backgroundColor: "red",
          display: "flex",
          gap: 1,
          paddingTop: 35,
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="el">
          <div style={{ paddingLeft: 11 }}>dashboard</div>
        </div>
        <div className="el">
          <div style={{ paddingLeft: 11 }}>dashboard</div> <RightOutlined />
        </div>
        <div className="el">
          <div style={{ paddingLeft: 11 }}>dashboard</div> <RightOutlined />
        </div>
        <div className="el">
          <div style={{ paddingLeft: 11 }}>dashboard</div> <RightOutlined />
        </div>
        <div className="el">
          <div style={{ paddingLeft: 11 }}>dashboard</div> <RightOutlined />
        </div>
        <div className="el">
          <div style={{ paddingLeft: 11 }}>dashboard</div> <RightOutlined />
        </div>
      </div>
    </div>
  );
}
