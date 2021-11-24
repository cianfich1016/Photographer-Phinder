import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 5, sm: 5 }}
        sx={{ bgcolor: "primary.main", color: "white" }}
        // color="white"
      >
        <Container maxWidth="lg">
          <Typography variant="body1" textAlign="center">
            Copyright ©{" "}
            <Link
              href="https://github.com/cianfich1016/Photographer-Phinder"
              color="inherit"
              underline="none"
            >
              Github
            </Link>
          </Typography>
        </Container>
      </Box>
    </footer>
  );
}
