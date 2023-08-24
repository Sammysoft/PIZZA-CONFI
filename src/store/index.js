import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./logo512.png",
  fullDecal: "./logo512.png",
  isModelVisible: true,
});

export default state;
