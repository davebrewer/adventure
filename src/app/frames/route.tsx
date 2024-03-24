// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";
import { ntscPalette } from "../utils";

 
const frames = createFrames({
  basePath: "/frames/",
});
 
const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div tw="flex flex-col items-center justify-center" style={{background: ntscPalette.orange, width: '100%', height: '100%'}}>
        {/* <img src="/adventure.jpg" tw="w-1/2" /> */}
        <div tw="flex text-white text-8xl uppercase">
          Adventure
        </div>
        <div tw="flex text-white text-4xl uppercase">
          Video Frame
        </div>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target="/moves"
      >
        Start
      </Button>
    ],
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;