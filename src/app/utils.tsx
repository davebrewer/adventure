import { Room, Direction, ButtonArray } from './types';
import { Button } from "frames.js/next";

// ROOM COLOURS
export const ntscPalette = {
  blue: "#1C02FF", // A bright, vivid blue
  orange: "#FAA00B", // A rich, vibrant orange
  purple: "#B200FE", // A deep, striking purple
  red: "#D82700", // A bold, eye-catching red
  yellow: "#E5E619", // A bright, sunny yellow
  green: "#00C400" // A lively, lush green
};

const roomsColours = [
  ntscPalette.blue,
  ntscPalette.orange,
  ntscPalette.purple,
  ntscPalette.red,
  ntscPalette.yellow,
  ntscPalette.green
];

export function getRandomColor() {
  const index = Math.floor(Math.random() * roomsColours.length);
  return roomsColours[index];
}

export function findNextRoomId(mazeMap: Room[], currentRoomId: number, direction: Direction): Room {
  const currentRoom = mazeMap.find(room => room.id === currentRoomId);
  if (!currentRoom) {
    console.error('Current room not found');
    return mazeMap[0]; // or other appropriate error handling
  }

  let nextPosition = { x: currentRoom.position_x, y: currentRoom.position_y };
  switch (direction) {
    case 'top': nextPosition.y -= 1; break;
    case 'bottom': nextPosition.y += 1; break;
    case 'left': nextPosition.x -= 1; break;
    case 'right': nextPosition.x += 1; break;
  }

  const nextRoom = mazeMap.find(room => room.position_x === nextPosition.x && room.position_y === nextPosition.y);

  return nextRoom ?? mazeMap[0]; // Return the first room as a fallback
}

export const getButtons = (currentRoom: Room): ButtonArray => {
  const buttons: any[] = [];

  if (currentRoom?.doorLeft === true && !currentRoom.endFrame) 
    buttons.push(<Button action="post" target={{ query: { move: 'left', pageIndex: currentRoom.id } }}>⬅️</Button>);
  if (currentRoom?.doorTop === true && !currentRoom.endFrame) 
    buttons.push(<Button action="post" target={{ query: { move: 'top', pageIndex: currentRoom.id } }}>⬆️</Button>);
  if (currentRoom?.doorBottom === true && !currentRoom.endFrame) 
    buttons.push(buttons.push(<Button action="post" target={{ query: { move: 'bottom', pageIndex: currentRoom.id } }}>⬇️</Button>));
  if (currentRoom?.doorRight === true && !currentRoom.endFrame) 
    buttons.push(buttons.push(<Button action="post" target={{ query: { move: 'right', pageIndex: currentRoom.id } }}>➡️</Button>));
  if (currentRoom.endFrame) 
    buttons.push(<Button action="post" target="/end">Congratulations. The End.</Button>);
  
  // TypeScript doesn't allow direct assertion to ButtonArray because it can't infer the exact tuple size this way
  // So, we use a workaround by asserting through `unknown` type
  return buttons as unknown as ButtonArray;
};