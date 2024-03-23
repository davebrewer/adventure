import { Room, Direction } from './types';

// ROOM COLOURS
const ntscPalette = {
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

