"use client";
import { playSpeakiSound } from "./utils/sound";
import { Toaster } from "sonner";

export default function Page() {
  return (
    <html>
      <title>speaki</title>
      <body>
        <h1>스피키 네르기</h1>
        <button onClick={playSpeakiSound}>스피키임 (아무튼 스피키)</button>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
