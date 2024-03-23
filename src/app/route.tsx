// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

 
const frames = createFrames({
  basePath: "/",
  initialState: {
    pageIndex: 0,
  },
});
 
const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div tw="flex flex-col">
        <div tw="flex">
          Adventure
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