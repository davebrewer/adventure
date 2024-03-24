// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";
import { getRandomColor, findNextRoomId, getButtons, ntscPalette } from "../../utils";
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

        {
          currentRoom?.special === 'key' &&
            (
              <div style={{display:'flex', width: '70px', height: '30px', position: 'absolute', top:'40%', left: '60%'}}>
                <div style={{height:'20px', width: '10px', backgroundColor: roomColor, position: 'absolute', left: 0, bottom: 0}}></div>  
                <div style={{height:'20px', width: '10px', backgroundColor: roomColor, position: 'absolute', left: '20px', bottom: 0}}></div>  
                <div style={{height:'10px', width: '50px', backgroundColor: roomColor, position: 'absolute', left: 0, top: '10px'}}></div>  
                <div style={{height:'10px', width: '30px', backgroundColor: roomColor, position: 'absolute', left: '40px', top: '0px'}}></div>  
                <div style={{height:'10px', width: '30px', backgroundColor: roomColor, position: 'absolute', left: '40px', top: '20px'}}></div>   
                <div style={{height:'10px', width: '10px', backgroundColor: roomColor, position: 'absolute', left: '60px', top: '10px'}}></div>   
              </div>
            )
        }

        {
          currentRoom?.special === 'easteregg' &&
            (
              <div style={{display:'flex', width: '5px', height: '5px', position: 'absolute', top:'75%', left: '20%', background: 'black'}}>
              </div>
            )
        }

        {
          currentRoom?.special === 'chalace' &&
            (
              <div style={{display:'flex', width: '80px', height: '90px', position: 'absolute', top:'60%', left: '30%'}}>
                <div style={{height:'30px', width: '10px', backgroundColor: roomColor, position: 'absolute', left: 0, top: 0}}></div>  
                <div style={{height:'30px', width: '10px', backgroundColor: roomColor, position: 'absolute', right: 0, top: 0}}></div> 
                <div style={{height:'30px', width: '10px', backgroundColor: roomColor, position: 'absolute', left: '10px', top: '20px'}}></div>  
                <div style={{height:'30px', width: '10px', backgroundColor: roomColor, position: 'absolute', right: '10px', top: '20px'}}></div> 
                <div style={{height:'44px', width: '40px', backgroundColor: roomColor, position: 'absolute', left: '20px', top: '30px'}}></div>
                <div style={{height:'30px', width: '20px', backgroundColor: roomColor, position: 'absolute', left: '30px', top: '60px'}}></div> 
                <div style={{height:'10px', width: '60px', backgroundColor: roomColor, position: 'absolute', left: '10px', top: '90px'}}></div>      
              </div>
            )
        }

        {
          currentRoom?.special === 'leftarrow' &&
            (
              <div style={{display:'flex', width: '70px', height: '50px', position: 'absolute', top:'17.5%', left: '80%'}}>
                <div style={{height:'10px', width: '70px', backgroundColor: ntscPalette.yellow, position: 'absolute', left: 0, top: '20px'}}></div>  
                <div style={{height:'30px', width: '10px', backgroundColor: ntscPalette.yellow, position: 'absolute', left: '10px', top: '10px'}}></div>
                <div style={{height:'10px', width: '10px', backgroundColor: ntscPalette.yellow, position: 'absolute', left: '20px', top: 0}}></div>
                <div style={{height:'10px', width: '10px', backgroundColor: ntscPalette.yellow, position: 'absolute', left: '20px', top: '40px'}}></div>
              </div>
            )
        }

        {
          currentRoom?.special === 'dragon' &&
            (
              <div style={{display:'flex', width: '220px', height: '80px', position: 'absolute', top:'45%', left: '50%'}}>
                <div style={{height:'10px', width: '60px', backgroundColor: ntscPalette.red, position: 'absolute', left: '30px', top: '210px'}}></div>
                <div style={{height:'10px', width: '30px', backgroundColor: ntscPalette.red, position: 'absolute', left: '10px', top: '200px'}}></div>
                <div style={{height:'10px', width: '10px', backgroundColor: ntscPalette.red, position: 'absolute', left: '10px', top: '190px'}}></div>
                <div style={{height:'30px', width: '10px', backgroundColor: ntscPalette.red, position: 'absolute', left: '80px', top: '190px'}}></div>
                <div style={{height:'10px', width: '30px', backgroundColor: ntscPalette.red, position: 'absolute', left: '60px', top: '190px'}}></div>
                <div style={{height:'10px', width: '10px', backgroundColor: ntscPalette.red, position: 'absolute', left: '60px', top: '180px'}}></div>
                <div style={{height:'30px', width: '50px', backgroundColor: ntscPalette.red, position: 'absolute', left: '30px', top: '150px'}}></div>
                <div style={{height:'70px', width: '20px', backgroundColor: ntscPalette.red, position: 'absolute', left: '10px', top: '100px'}}></div>
                <div style={{height:'20px', width: '60px', backgroundColor: ntscPalette.red, position: 'absolute', left: '20px', top: '90px'}}></div>
                <div style={{height:'10px', width: '40px', backgroundColor: ntscPalette.red, position: 'absolute', left: '30px', top: '80px'}}></div>
                <div style={{height:'40px', width: '10px', backgroundColor: ntscPalette.red, position: 'absolute', left: '50px', top: '40px'}}></div>
                <div style={{height:'80px', width: '20px', backgroundColor: ntscPalette.red, position: 'absolute', left: '60px', top: '90px'}}></div>
                <div style={{height:'10px', width: '10px', backgroundColor: ntscPalette.red, position: 'absolute', left: '30px', top: '110px'}}></div>
                <div style={{height:'10px', width: '10px', backgroundColor: ntscPalette.red, position: 'absolute', left: '50px', top: '140px'}}></div>
                <div style={{height:'20px', width: '40px', backgroundColor: ntscPalette.red, position: 'absolute', left: '00px', top: '30px'}}></div>
                <div style={{height:'20px', width: '40px', backgroundColor: ntscPalette.red, position: 'absolute', left: '20px', top: '40px'}}></div>
                <div style={{height:'20px', width: '20px', backgroundColor: ntscPalette.red, position: 'absolute', left: '40px', top: '10px'}}></div>
                <div style={{height:'10px', width: '10px', backgroundColor: ntscPalette.red, position: 'absolute', left: '30px', top: '20px'}}></div>
                <div style={{height:'60px', width: '10px', backgroundColor: ntscPalette.red, position: 'absolute', left: '50px', top: '10px'}}></div>
                <div style={{height:'30px', width: '10px', backgroundColor: ntscPalette.red, position: 'absolute', left: '60px', top: '20px'}}></div>
                <div style={{height:'1200px', width: '10px', backgroundColor: 'black', position: 'absolute', left: '-400px', top: '-500px'}}></div>
              </div>
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