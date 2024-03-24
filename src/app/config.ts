import { Room } from './types';

//  Simple debug maze
// export const mazeRooms: Room[] = [
//   {
//     id: 0,
//     position_x: 1,
//     position_y: 1,
//     // doors
//     doorTop: false,
//     doorRight: true,
//     doorBottom: true,
//     doorLeft: false,
//     // special
//     special: false,
//     endFrame: false
//   },
//   {
//     id: 1,
//     position_x: 2,
//     position_y: 1,
//     // doors
//     doorTop: false,
//     doorRight: false,
//     doorBottom: false,
//     doorLeft: true,
//     // special
//     special: 'easteregg',
//     endFrame: false
//   },
//   {
//     id: 2,
//     position_x: 1,
//     position_y: 2,
//     // doors
//     doorTop: true,
//     doorRight: true,
//     doorBottom: false,
//     doorLeft: false,
//     // special
//     special: false,
//     endFrame: false
//   },
//   {
//     id: 3,
//     position_x: 2,
//     position_y: 2,
//     // doors
//     doorTop: false,
//     doorRight: false,
//     doorBottom: false,
//     doorLeft: true,
//     // special
//     special: false,
//     endFrame: true
//   },
// ];

export const mazeRooms: Room[] = [
  // Row 1
  { id: 0, position_x: 1, position_y: 1, doorTop: false, doorRight: true, doorBottom: true, doorLeft: false, special: false, endFrame: false },
  { id: 1, position_x: 2, position_y: 1, doorTop: false, doorRight: true, doorBottom: false, doorLeft: true, special: false, endFrame: false },
  { id: 2, position_x: 3, position_y: 1, doorTop: false, doorRight: true, doorBottom: false, doorLeft: true, special: false, endFrame: false },
  { id: 3, position_x: 4, position_y: 1, doorTop: false, doorRight: true, doorBottom: false, doorLeft: true, special: false, endFrame: false },
  { id: 4, position_x: 5, position_y: 1, doorTop: false, doorRight: false, doorBottom: true, doorLeft: true, special: false, endFrame: false },

  // Row 2
  { id: 5, position_x: 1, position_y: 2, doorTop: true, doorRight: true, doorBottom: true, doorLeft: false, special: false, endFrame: false },
  { id: 6, position_x: 2, position_y: 2, doorTop: false, doorRight: true, doorBottom: false, doorLeft: true, special: false, endFrame: false },
  { id: 7, position_x: 3, position_y: 2, doorTop: false, doorRight: true, doorBottom: false, doorLeft: true, special: false, endFrame: false },
  { id: 8, position_x: 4, position_y: 2, doorTop: false, doorRight: false, doorBottom: false, doorLeft: true, special: 'easteregg', endFrame: false },
  { id: 9, position_x: 5, position_y: 2, doorTop: true, doorRight: false, doorBottom: true, doorLeft: false, special: false, endFrame: false },

  // Row 3
  { id: 10, position_x: 1, position_y: 3, doorTop: true, doorRight: true, doorBottom: false, doorLeft: false, special: false, endFrame: false },
  { id: 11, position_x: 2, position_y: 3, doorTop: false, doorRight: true, doorBottom: false, doorLeft: true, special: false, endFrame: false },
  { id: 12, position_x: 3, position_y: 3, doorTop: false, doorRight: false, doorBottom: true, doorLeft: true, special: false, endFrame: false },
  { id: 13, position_x: 4, position_y: 3, doorTop: false, doorRight: true, doorBottom: true, doorLeft: false, special: false, endFrame: false },
  { id: 14, position_x: 5, position_y: 3, doorTop: true, doorRight: false, doorBottom: false, doorLeft: true, special: false, endFrame: false },

  // Row 4
  { id: 15, position_x: 1, position_y: 4, doorTop: false, doorRight: true, doorBottom: true, doorLeft: false, special: false, endFrame: false },
  { id: 16, position_x: 2, position_y: 4, doorTop: false, doorRight: true, doorBottom: false, doorLeft: true, special: false, endFrame: false },
  { id: 17, position_x: 3, position_y: 4, doorTop: true, doorRight: false, doorBottom: false, doorLeft: true, special: false, endFrame: false },
  { id: 18, position_x: 4, position_y: 4, doorTop: true, doorRight: true, doorBottom: false, doorLeft: false, special: false, endFrame: false },
  { id: 19, position_x: 5, position_y: 4, doorTop: false, doorRight: false, doorBottom: false, doorLeft: true, special: 'key', endFrame: false },

  // Row 5
  { id: 20, position_x: 1, position_y: 5, doorTop: true, doorRight: true, doorBottom: false, doorLeft: false, special: 'dragon', endFrame: false },
  { id: 21, position_x: 2, position_y: 5, doorTop: false, doorRight: true, doorBottom: false, doorLeft: true, special: false, endFrame: false },
  { id: 22, position_x: 3, position_y: 5, doorTop: false, doorRight: true, doorBottom: false, doorLeft: true, special: false, endFrame: false },
  { id: 23, position_x: 4, position_y: 5, doorTop: false, doorRight: true, doorBottom: false, doorLeft: true, special: false, endFrame: false },
  { id: 24, position_x: 5, position_y: 5, doorTop: false, doorRight: false, doorBottom: false, doorLeft: true, special: false, endFrame: true },
];
