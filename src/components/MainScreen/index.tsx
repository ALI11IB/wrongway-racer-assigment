import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Container, Box, Grid } from "@mui/material";
const socket = io("wss://wrongway-racer-api.spls.ae/");
function Scores() {
  return (
    <Box
      width={"100%"}
      sx={{
        borderRadius: "20px",
        filter: "drop-shadow(0px 4px 90px #542899)",
        backgroundColor: "gray",
        minHeight: "500px",
      }}
    ></Box>
  );
}

export default Scores;
