import Svg, { Path } from "react-native-svg";
interface Props {
  colour?: string;
  size?: number;
}

export function PlayIcon({ colour = "#191D1A", size = 12 }: Props) {
  return (
    <Svg width={size - 1} height={size} viewBox="0 0 11 12" fill="none">
      <Path d="M10.3335 5.99984L0.833496 11.4847L0.833496 0.515009L10.3335 5.99984Z" fill={colour} />
    </Svg>
  );
}
