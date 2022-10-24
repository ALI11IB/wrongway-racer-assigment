import { useEffect } from "react";
import io from "socket.io-client";
import {
  setIsConnected,
  setPlayers,
  setNewChat,
  setNewChatJoin,
  setNewEnemy,
} from "../rtk/features/socketSlice";
import { useAppDispatch } from "../rtk/store";
const socket = io("wss://wrongway-racer-api.spls.ae/");
export const useSocket = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    socket.on("connect", () => {
      dispatch(setIsConnected({ value: true }));
    });
    socket.on("disconnect", () => {
      dispatch(setIsConnected({ value: false }));
    });
    socket.on("players", (args) => {
      //   console.log(args, "players");
      dispatch(setPlayers({ value: args }));
    });
    socket.on("newEnemy", (args) => {
      //   console.log(args, "newEnemy");
      dispatch(setNewEnemy({ value: args }));
    });
    socket.on("newChatJoin", (args) => {
      //   console.log(args, "newChatJoin");
      dispatch(setNewChatJoin({ value: args }));
    });
    socket.on("newChat", (args) => {
      //   console.log(args, "newChat");
      dispatch(setNewChat({ value: args }));
    });
    socket.onAny((eventName, args) => {
      //   console.log( "players newEnemy newChatJoin newChat ");
      //   console.log(eventName, "eventName");
      //   console.log(args, "args");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);
};
