import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("wss://wrongway-racer-api.spls.ae/");
function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });
    socket.onAny((eventName, ...args) => {
      console.log(eventName, "eventName");
      // console.log(args, "args");
    });
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
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
