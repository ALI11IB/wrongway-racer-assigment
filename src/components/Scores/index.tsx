import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../rtk/store";
function MainScreen() {
  const { players } = useAppSelector((state) => state.socket);
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
      {players.length &&
        players.map((item, index) => (
          <Box
            key={index}
            width={"100%"}
            display="flex"
            justifyContent={"space-between"}
            alignItems="start"
            sx={{
              borderBottom: "1px solid #9747FF",
            }}
          >
            <Typography
              component="div"
              sx={{
                width: "60%",
                m: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              {item.name}
            </Typography>
            <Typography
              component="div"
              sx={{
                width: "15%",
                m: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                backgroundColor: "#261B50",
              }}
            >
              Record
              <span>{item.record}</span>
            </Typography>
            <Typography
              component="div"
              sx={{
                width: "15%",
                m: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              Rank
              <span>{item.rank}</span>
            </Typography>
          </Box>
        ))}
    </Box>
  );
}

export default MainScreen;
