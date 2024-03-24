// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";
import { getRandomColor, findNextRoomId, getButtons } from "../../utils";
import { mazeRooms } from "../../config";
import { Room, Direction } from "../../types";
 
const frames = createFrames({
  basePath: "/frames/moves",
  initialState: {
    pageIndex: 2,
  },
});
 
const handleRequest = frames(async (ctx) => {
  console.log('ctx move: ', ctx.searchParams.move);

  const direction: Direction = ctx.searchParams.move as Direction;

  const pageIndex = Number(ctx.searchParams.pageIndex || ctx.initialState.pageIndex);
 
  let currentRoom: Room; 
  
  if (ctx.searchParams.move) {
    console.log('fnr', mazeRooms, pageIndex, direction, findNextRoomId(mazeRooms, pageIndex, direction));
    currentRoom = findNextRoomId(mazeRooms, pageIndex, direction);
  } else {
    currentRoom = mazeRooms[ctx.initialState.pageIndex];
  }

  console.log('current room ->', currentRoom);
  const roomColor = getRandomColor();

  if (ctx.searchParams.move) {
    // find out the current room
  }

  return {
    image: (
      <div tw="w-full h-full bg-slate-700 text-white justify-center items-center flex flex-col" style={{backgroundColor:"#909090", position: 'relative'}}> 
        {/* TOP */}
        {
          currentRoom?.doorTop === true ?
            (
              <div style={{display:'flex', width: '100%', height: '50px', position: 'absolute', top:0}}>
                {/* TOP EXIT */}
                <div style={{width:'40%', height: '50px', backgroundColor: roomColor, position: 'absolute', top: 0, left: 0}}></div>
                <div style={{width:'40%', height: '50px', backgroundColor: roomColor, position: 'absolute', top: 0, right: 0}}></div>
              </div>
            )
            :
            (
              // TOP WALL
              <div style={{width:'100%', height: '50px', backgroundColor: roomColor, position: 'absolute', top: 0}}></div>
            )
        }

        {/* RIGHT */}
        {
          currentRoom?.doorRight === true ?
            (
              <div style={{display:'flex', width: '50px', height: '100%', position: 'absolute', top:0, right: 0}}>
                {/* RIGHT EXIT */}
                <div style={{height:'40%', width: '50px', backgroundColor: roomColor, position: 'absolute', right: 0, top: 0}}></div>  
                {/* <div style={{height:'30%', width: '25px', backgroundColor: roomColor, position: 'absolute', right: 0, top: 0}}></div>   */}
                <div style={{height:'40%', width: '50px', backgroundColor: roomColor, position: 'absolute', right: 0, bottom: 0}}></div>   
                {/* <div style={{height:'20%', width: '25px', backgroundColor: roomColor, position: 'absolute', right: 0, bottom: 0}}></div>     */}
              </div>
            )
            :
            (
              // RIGHT WALL
              <div style={{height:'100%', width: '50px', backgroundColor: roomColor, position: 'absolute', right: 0}}></div>
            )
        }

        {/* BOTTOM */}
        {
          currentRoom?.doorBottom === true ?
            (
              <div style={{display:'flex', width: '100%', height: '50px', position: 'absolute', bottom:0}}>
                {/* BOTTOM EXIT */}
                <div style={{width:'40%', height: '50px', backgroundColor: roomColor, position: 'absolute', bottom: 0, left: 0}}></div>
                <div style={{width:'40%', height: '50px', backgroundColor: roomColor, position: 'absolute', bottom: 0, right: 0}}></div>
              </div>
            )
            :
            (
              // BOTTOM WALL
              <div style={{width:'100%', height: '50px', backgroundColor: roomColor, position: 'absolute', bottom: 0}}></div>
            )
        }

        {/* LEFT */}
        {
          currentRoom?.doorLeft === true ?
            (
              <div style={{display:'flex', width: '50px', height: '100%', position: 'absolute', top:0, left: 0}}>
                {/* LEFT EXIT */}
                <div style={{height:'40%', width: '50px', backgroundColor: roomColor, position: 'absolute', left: 0, top: 0}}></div>  
                {/* <div style={{height:'30%', width: '25px', backgroundColor: roomColor, position: 'absolute', right: 0, top: 0}}></div>   */}
                <div style={{height:'40%', width: '50px', backgroundColor: roomColor, position: 'absolute', left: 0, bottom: 0}}></div>   
                {/* <div style={{height:'20%', width: '25px', backgroundColor: roomColor, position: 'absolute', right: 0, bottom: 0}}></div>     */}
              </div>
            )
            :
            (
              // Left WALL
              <div style={{height:'100%', width: '50px', backgroundColor: roomColor, position: 'absolute', left: 0}}></div>
            )
        }
      </div>
    ),
    buttons: [
      ...getButtons(currentRoom)
    ]
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;