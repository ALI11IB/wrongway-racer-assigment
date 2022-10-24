import { Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../../rtk/store";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Players() {
  const { players } = useAppSelector((state) => state.socket);
  return (
    <Box
      width={"100%"}
      display="flex"
      justifyContent={"start"}
      alignItems="center"
      flexDirection={"column"}
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
      <Box
        width={"100%"}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography
          sx={{
            fontSize: "15px",
            color: "#FFFFFF",
          }}
        >
          Players
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            color: "#FFFFFF",
          }}
        >
          {players.length}
        </Typography>
      </Box>
      <Button
        sx={{
          background:
            "linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)",
          borderRadius: "4px",
          color: "#fff",
          width: "100%",
          m: 2,
          px: 8,
          py: 1,
        }}
      >
        <SettingsIcon
          sx={{
            color: "#fff",
          }}
        />
        Settings
      </Button>
      {players.length &&
        players.map((item, index) => (
          <Typography
            key={index}
            component="div"
            sx={{
              m: 2,
              width: "100%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <AccountCircleIcon />
            {item.name}
          </Typography>
        ))}
    </Box>
  );
}

export default Players;
