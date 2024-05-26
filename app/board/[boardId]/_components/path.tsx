interface PathProps {
  x: number;
  y: number;
  points: number[][];
  fill: string;
  onPointerDown?: (e: React.PointerEvent, id: string) => void;
  stroke?: string;
}

export const Path = ({ x, y, points, fill, onPointerDown, stroke }: PathProps) => {
  return <path />;
};
