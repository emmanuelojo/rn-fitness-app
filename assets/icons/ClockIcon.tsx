import Svg, { Circle, Path } from "react-native-svg";

interface Props {
  colour?: string;
  size?: number;
}

export function ClockIcon({ colour = "#000000", size = 13 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 13" fill="none">
      <Circle cx="5.99992" cy="7.16667" r="4.66667" stroke={colour} strokeWidth="0.875" />
      <Path d="M4.25 0.75H7.75" stroke={colour} strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M6 4.25V7.14555C6 7.15919 6.00478 7.17241 6.01352 7.18289L7.45833 8.91667"
        stroke={colour}
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
