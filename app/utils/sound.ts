import { error } from "node:console";

const clickSound =
  typeof window !== "undefined" ? new Audio("스피키/사운드/에으.mp3") : null;

export const playSpeakiSound = (): void => {
  if (!clickSound) return;

  clickSound.currentTime = 0;

  clickSound.play().catch((error) => {
    console.log(error);
  });
};
