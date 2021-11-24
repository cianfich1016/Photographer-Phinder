import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function HomePage() {
  const [photoType, setPhotoType] = useState("");
  const [location, setLocation] = useState({ location: "" });

  const handleTypeChange = (event) => {
    setPhotoType(event.target.value);
    //fetch call and page change
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    //fetch call and page change
  };

  // Need eventlistener on button click to make api call and change page?

  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <Grid item xs={3}></Grid>
        <h1>
          {" "}
          Let us help you capture the perfect photographer to capture your
          memories...
        </h1>
        <p>
          {" "}
          Whether you are celebrating a milestone in your life be it marriage or
          an edition to the family, or are looking to update your headshots, or
          maybe Fido needs a new portrait on the wall, let Photographer Phinder
          help you find that perfect person who will imortalize your memories!
        </p>
      </Box>
    </Container>
  );
}
