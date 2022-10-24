import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Chat, MainScreen, Players, Scores } from "../components";
import { useSocket } from "../customHooks/socketHandler";
function App() {
  useSocket();
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#180C3C" }}>
      <Container maxWidth="lg">
        <Grid container display="flex" justifyContent="center">
          <Grid item xs={12} mt={8} mb={3}>
            <MainScreen />
          </Grid>
          <Grid item lg={4} mb={3}>
            <Scores />
          </Grid>
          <Grid item lg={4} mx={6} mb={3}>
            <Chat />
          </Grid>
          <Grid item lg={3} mb={3}>
            <Players />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
