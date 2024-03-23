import { Room } from './types';

export const mazeRooms: Room[] = [
  {
    id: 0,
    position_x: 1,
    position_y: 1,
    // doors
    doorTop: false,
    doorRight: true,
    doorBottom: true,
    doorLeft: false,
    // special
    special: false,
    endFrame: false
  },
  {
    id: 1,
    position_x: 2,
    position_y: 1,
    // doors
    doorTop: false,
    doorRight: false,
    doorBottom: false,
    doorLeft: true,
    // special
    special: 'easteregg',
    endFrame: false
  },
  {
    id: 2,
    position_x: 1,
    position_y: 2,
    // doors
    doorTop: true,
    doorRight: true,
    doorBottom: false,
    doorLeft: false,
    // special
    special: false,
    endFrame: false
  },
  {
    id: 3,
    position_x: 2,
    position_y: 2,
    // doors
    doorTop: false,
    doorRight: false,
    doorBottom: false,
    doorLeft: true,
    // special
    special: false,
    endFrame: true
  },
];