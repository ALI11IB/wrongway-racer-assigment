import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Chat, MainScreen, Players, Scores } from "../components";
const socket = io("wss://wrongway-racer-api.spls.ae/");
function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });
    // socket.onAny((eventName, ...args) => {
    //   console.log( "players newEnemy newChatJoin newChat ");
    //   // console.log(args, "args");
    // });
    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", () => {
      // setLastPong(new Date().toISOString());
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
  };
  console.log(isConnected, lastPong, "lastPong");

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#180C3C" }}>
      <Container maxWidth="lg">
        <Grid container display="flex" justifyContent="center">
          <Grid item xs={12} mt={8} mb={3}>
            <MainScreen />
          </Grid>
          <Grid item lg={3} mb={3}>
            <Scores />
          </Grid>
          <Grid item lg={5} mx={6} mb={3}>
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
