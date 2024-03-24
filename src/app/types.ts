export type Room = {
  id: number;
  position_x: number;
  position_y: number;
  doorTop: boolean;
  doorRight: boolean;
  doorBottom: boolean;
  doorLeft: boolean;
  special: 'dragon' | 'easteregg' | 'key' | false;
  endFrame: boolean;
};

export type Direction = 'top' | 'bottom' | 'left' | 'right';