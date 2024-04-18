import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./style.css";
export default function RedirectButton() {
  return (
    <Stack spacing={2} direction="row" sx={{ pb: "20px" }}>
      <Button variant="contained" href="/">
        RedirectButton
      </Button>
    </Stack>
  );
}
