import React from "react";
import {
  RadarChartOutlined,
  RightOutlined,
  DownOutlined,
} from "@ant-design/icons";
import user from "./user.jpg";
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

      <div
        className="nav-footer"
        style={{
          display: "flex",
          backgroundColor: "rgb(45, 19, 139)",
          marginLeft: 14,
          marginTop: 450,
          width: "90%",
          borderRadius: 4,
          justifyContent: "space-between",
        }}
      >
        <div
          className="user-info"
          style={{
            display: "flex",
            paddingLeft: 8,
            gap: 10,
            paddingTop: 9,
            paddingBottom: 12,
          }}
        >
          <img
            src={user}
            alt="i"
            style={{ borderRadius: "50%", width: "32px", height: "32px" }}
          />
          <div
            className="user-name-desg"
            style={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <span>Evano</span>
            <span>Project Manager</span>
          </div>
        </div>
        <DownOutlined style={{ position: "relative", left: -13, top: 20 }} />
      </div>
    </div>
  );
}
