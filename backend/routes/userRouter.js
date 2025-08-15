import express from "express";
import { userAuth } from "../middleware/userAuth.js";
import { onBoarding } from "../controllers/onBoarding.js";
import { saveLocation } from "../controllers/saveLocation.js";

const router = express.Router();

const avatars = [
  {
    presetId: "pfp1",
    imageUrl: "http://localhost:3000/avatars/avatar1.webp",
  },
  {
    presetId: "pfp2",
    imageUrl: "http://localhost:3000/avatars/avatar2.webp",
  },
  {
    presetId: "pfp3",
    imageUrl: "http://localhost:3000/avatars/avatar3.webp",
  },
  {
    presetId: "pfp4",
    imageUrl: "http://localhost:3000/avatars/avatar4.webp",
  },
  {
    presetId: "pfp5",
    imageUrl: "http://localhost:3000/avatars/avatar11.webp",
  },
  {
    presetId: "pfp6",
    imageUrl: "http://localhost:3000/avatars/avatar6.webp",
  },
  {
    presetId: "pfp7",
    imageUrl: "http://localhost:3000/avatars/avatar7.webp",
  },
  {
    presetId: "pfp8",
    imageUrl: "http://localhost:3000/avatars/avatar8.webp",
  },
  {
    presetId: "pfp9",
    imageUrl: "http://localhost:3000/avatars/avatar9.webp",
  },
  {
    presetId: "pfp10",
    imageUrl: "http://localhost:3000/avatars/avatar10.webp",
  },
];

router.post("/onBoarding", userAuth, onBoarding);
router.post("/saveLocation", userAuth, saveLocation);
router.get("/avatars", (req, res) => {
  res.json(avatars);
});

export default router;
