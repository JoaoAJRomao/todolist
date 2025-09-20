"use client";
import { Button, Card, Row, Slider } from "antd";
import React from "react";
import { CopyOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { SiNextdotjs } from "react-icons/si";
import { Checkbox } from "antd";

export default function Home() {
  function setPwdLength(value: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div style={pageStyle}>
      <div style={cardContainerStyle}>
        <div style={cardTitleStyle}>
          <h2 style={titleStyle}>Password Generator</h2>
          <div style={iconNextStyle}>
            <span style={spanIconNext}>
              <SiNextdotjs size={32} color="#fff" />
            </span>
            <h2 style={titleStyle}>Next.js</h2>
          </div>
        </div>

        <Card style={pwdBoxStyle}>
          <div style={pwdStyle}>
            <p>text</p>
            <PlusCircleOutlined style={{fontSize: '42px'}}/>
          </div>
        </Card>        
      </div>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#a0a0a0ff",
};
const cardContainerStyle: React.CSSProperties = {
  width: "60%",
  backgroundColor: "#e6e6e6ff",
  padding: 20,
  borderRadius: 10,
  minWidth: 450,
  maxWidth: 600,
};
const titleStyle: React.CSSProperties = { marginTop: 5, color: "black" };
const cardTitleStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
  marginBottom: 40,
};
const iconNextStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: 10,
};
const spanIconNext: React.CSSProperties = {
  background: "#2855e9ff",
  borderRadius: "60%",
  padding: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const pwdBoxStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: 40,
  minHeight: 60,
};
const pwdStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const btnGeneratePwdStyle: React.CSSProperties = {
  marginBottom: 10,
  width: "100%",
  height: 50,
  fontSize: 20,
};
const iconStyle: React.CSSProperties = {
  fontSize: 20,
  cursor: "pointer",
  marginLeft: 8,
};
const pwdLengthStyle: React.CSSProperties = {
  border: "2px solid black",
  borderRadius: 5,
  borderWidth: 1,
  padding: 10,
  marginBottom: 20,
  color: "black",
  flexDirection: "row",
  display: "flex",
  alignItems: "center",
  gap: 10,
};
const divSliderStyle: React.CSSProperties = { flex: 1, paddingRight: 10 };
const checkboxStyle: React.CSSProperties = {
  flexDirection: "column",
  display: "flex",
  gap: 8,
  marginBottom: 30,
};