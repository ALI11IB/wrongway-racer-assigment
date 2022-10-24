import { Box } from "@mui/material";
function Chat() {
  return (
    <Box
      width={"100%"}
      sx={{
        borderRadius: "12px",
        backgroundColor: "rgba(16, 12, 74, 0.2)",
        boxShadow: "inset 3px 4px 63px rgba(255, 255, 255, 0.25)",
        minHeight: "200px",
      }}
    ></Box>
  );
}

export default Chat;
