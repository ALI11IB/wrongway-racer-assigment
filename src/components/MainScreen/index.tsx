import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { Container, Box, Grid } from "@mui/material";

import * as PIXI from "pixi.js";
import carImg from "./images/cars/car_center.png";
import roadImg from "./images/nature/road.png";
import skyImg from "./images/nature/sky.png";
import mountainImg from "./images/nature/mountain_fade.png";
import mountainLeftImg from "./images/nature/mountain_left.png";
import mountainRightImg from "./images/nature/mountain_right.png";
function Scores() {
  const ref = useRef(null);
  const [carAnchor, setAnchor] = useState({ x: 2, y: 1 });
  useEffect(() => {
    // On first render create our application
    const app = new PIXI.Application({
      width: 1150,
      height: 800,
      transparent: true,
    });

    const car = PIXI.Sprite.from(carImg);
    car.anchor.set(carAnchor.x, carAnchor.y);
    car.x = 900;
    car.y = 800;
    app.stage.addChild(car);
    car.width = 200;
    car.height = 200;
    car.zIndex = 50;

    const road = PIXI.Sprite.from(roadImg);
    road.anchor.set(0);
    road.x = 0;
    road.y = 410;
    app.stage.addChild(road);
    road.width = 1150;
    road.height = 400;
    road.zIndex = 0;

    const sky = PIXI.Sprite.from(skyImg);
    sky.anchor.set(0);
    sky.x = 0;
    sky.y = 10;
    app.stage.addChild(sky);
    sky.width = 1150;
    sky.height = 400;
    sky.zIndex = 0;

    const mountain = PIXI.Sprite.from(mountainImg);
    mountain.anchor.set(0);
    mountain.x = 0;
    mountain.y = 75;
    app.stage.addChild(mountain);
    mountain.width = 1150;
    mountain.height = 400;
    mountain.zIndex = 1;

    const mountainRight = PIXI.Sprite.from(mountainRightImg);
    mountainRight.anchor.set(0, 0);
    mountainRight.x = 700;
    mountainRight.y = 300;
    app.stage.addChild(mountainRight);
    mountainRight.width = 400;
    mountainRight.height = 200;
    mountainRight.zIndex = 10;

    const mountainLeft = PIXI.Sprite.from(mountainLeftImg);
    mountainLeft.anchor.set(0);
    mountainLeft.x = 50;
    mountainLeft.y = 300;
    app.stage.addChild(mountainLeft);
    mountainLeft.width = 400;
    mountainLeft.height = 200;
    mountainLeft.zIndex = 10;

    var underLayer = new PIXI.Container();
    underLayer.addChild(car, road, sky, mountain, mountainRight, mountainLeft);
    underLayer.sortChildren();
    app.stage.addChild(underLayer);
    if (ref.current) (ref.current as any).appendChild(app.view);
    // Start the PixiJS app
    app.start();

    return () => {
      // On unload completely destroy the application and all of it's children
      app.destroy(true, true);
    };
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      event.preventDefault();
      const key = event.key;
      switch (key) {
        case "ArrowLeft":
          if (carAnchor.x < 3) {
            console.log("left");
            setAnchor({ x: carAnchor.x + 1, y: carAnchor.y });
          }
          break;
        case "ArrowRight":
          if (carAnchor.x > 1) {
            console.log("right");
            setAnchor({ x: carAnchor.x - 1, y: carAnchor.y });
          }
          break;
      }
    });
  }, []);
  return (
    <Box
      width={"100%"}
      sx={{
        borderRadius: "20px",
        filter: "drop-shadow(0px 4px 90px #542899)",
        backgroundColor: "gray",
        minHeight: "500px",
      }}
    >
      <div ref={ref} />
    </Box>
  );
}

export default Scores;
