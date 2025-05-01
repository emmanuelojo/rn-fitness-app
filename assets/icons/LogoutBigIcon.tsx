import Svg, { Path } from "react-native-svg";
interface Props {
  innerColour?: string;
  outerColour?: string;
  size?: number;
}

export function LogoutBigIcon({ outerColour = "#141B34", innerColour = "#0BBC47", size = 67 }: Props) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Path
        d="M41.875 49.2031C41.6695 54.373 37.3612 58.7629 31.5894 58.6216C30.2466 58.5887 28.5869 58.1208 25.2677 57.1845C17.2793 54.9311 10.3447 51.1442 8.68086 42.6608C8.375 41.1017 8.375 39.3469 8.375 35.8375V31.1625C8.375 27.6532 8.375 25.8984 8.68086 24.339C10.3447 15.8557 17.2793 12.0688 25.2677 9.81558C28.5869 8.87928 30.2466 8.41114 31.5894 8.37831C37.3612 8.23711 41.6695 12.6269 41.875 17.7969"
        stroke={outerColour}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M58.6251 33.5H27.9167M58.6251 33.5C58.6251 31.5453 53.0577 27.893 51.6459 26.5208M58.6251 33.5C58.6251 35.4547 53.0577 39.107 51.6459 40.4791"
        stroke={innerColour}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
