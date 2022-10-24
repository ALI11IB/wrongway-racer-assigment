import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../rtk/store";
function Chat() {
  const { chats, newChatJoin } = useAppSelector((state) => state.socket);

  return (
    <Box
      width={"100%"}
      sx={{
        borderRadius: "12px",
        backgroundColor: "rgba(16, 12, 74, 0.2)",
        boxShadow: "inset 3px 4px 63px rgba(255, 255, 255, 0.25)",
        minHeight: "200px",
        p: 2,
        overflowY: "scroll",
        overflowX: "hidden",
        height: "250px",
      }}
    >
      {chats.length ? (
        chats.map((item, index) => (
          <Typography
            key={index}
            sx={{
              mb: 1,
              fontSize: "15px",
              color: !item.message ? "#FF3EEC" : "#FFFFFF",
            }}
          >
            {/* {!item.message && item?.name + "Has Joined the game"} */}
            {item.message && item?.name + ": " + item.message}
          </Typography>
        ))
      ) : (
        <></>
      )}
    </Box>
  );
}

export default Chat;
