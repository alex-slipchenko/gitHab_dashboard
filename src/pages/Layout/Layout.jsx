import React from "react";
import { Outlet } from "react-router-dom";
import Navigate from "../../components/Navigation/Navigate";
import Container from "@mui/material/Container";
import "./style.css";
export default function Layout() {
  return (
    <>
      <Container maxWidth="lg" sx={{ bgcolor: "#cfe8fc", pb: "50px" }}>
        <Navigate />
        <Outlet />
      </Container>
    </>
  );
}
