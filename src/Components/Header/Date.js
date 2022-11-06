import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Date() {
  return (
    <Box>
      <Grid container spacing={0.5}>
        <Grid item>
          <Typography variant="h4">05</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">|</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ marginTop: -1 }}>
            Wednesday
          </Typography>
          <Typography variant="h5" sx={{ marginTop: -0.8 }}>
            Oct / 2022
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
