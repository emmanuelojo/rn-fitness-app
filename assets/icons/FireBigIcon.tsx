import Svg, { G, Path } from "react-native-svg";

interface Props {
  colour?: string;
  size?: number;
}

export function FireBigIcon({ colour = "#FFFFFF", size = 72 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 72 72" fill="none">
      <G opacity="0.5">
        <Path
          d="M60 41.4545C60 55.0106 49.2548 66 36 66C22.7452 66 12 55.0106 12 41.4545C12 36.51 13.4743 28.2308 18 24L24.1808 32.2411C25.0574 33.4099 27.0174 32.767 27.0871 31.3077C27.4394 23.9254 29.039 10.0238 36 6C36 6 60 27.8985 60 41.4545Z"
          stroke={colour}
          strokeWidth="4.5"
          strokeLinejoin="round"
        />
        <Path
          d="M45 54.9545C45 61.0548 40.9706 66 36 66C31.0294 66 27 61.0548 27 54.9545C27 48.8543 36 39 36 39C36 39 45 48.8543 45 54.9545Z"
          stroke={colour}
          strokeWidth="4.5"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}
