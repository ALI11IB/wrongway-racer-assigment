import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
interface SocketSlice {
  players: any[];
  newEnemy: any;
  newChatJoin: any;
  newChat: any;
  chats: any[];
  isConnected: boolean;
}

// Define the initial state using that type
const initialState: SocketSlice = {
  players: [],
  newEnemy: null,
  newChatJoin: null,
  newChat: null,
  chats: [],
  isConnected: false,
};

export const socketSlice = createSlice({
  name: "socket",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsConnected: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isConnected = action.payload.value;
    },
    setNewEnemy: (state, action: PayloadAction<{ value: any }>) => {
      state.newEnemy = action.payload.value;
    },
    setNewChatJoin: (state, action: PayloadAction<{ value: any }>) => {
      state.newChatJoin = action.payload.value;
      console.log(action.payload.value, "newChatJoin------------------");

      state.chats = [
        ...state.chats,
        {
          name: action.payload.value?.name,
          message: null,
        },
      ];
    },
    setNewChat: (state, action: PayloadAction<{ value: any }>) => {
      state.newChat = action.payload.value;
      console.log(action.payload.value, "newChat+++++++++++++");
      let newChats = [...state.chats];
      let lastChat = state.chats[state.chats.length - 1];
      console.log(lastChat, "lastChat");

      if (!lastChat.message) {
        state.chats = [
          ...newChats.slice(0, newChats.length - 1),
          {
            name: lastChat?.name,
            message: action.payload.value,
          },
        ];
      }
    },
    setPlayers: (state, action: PayloadAction<{ value: any }>) => {
      state.players = action.payload.value;
    },
  },
});

export const {
  setIsConnected,
  setPlayers,
  setNewChat,
  setNewChatJoin,
  setNewEnemy,
} = socketSlice.actions;

export default socketSlice.reducer;
