export type Room = {
  id: number;
  position_x: number;
  position_y: number;
  doorTop: boolean;
  doorRight: boolean;
  doorBottom: boolean;
  doorLeft: boolean;
  special: 'dragon' | 'easteregg' | 'key' | 'chalace' | 'leftarrow' | 'arrows' | false;
  endFrame: boolean;
};

export type Direction = 'top' | 'bottom' | 'left' | 'right';

export type ButtonArray = 
  | [any]
  | [any, any]
  | [any, any, any]
  | [any, any, any, any];