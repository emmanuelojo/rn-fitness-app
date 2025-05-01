import Svg, { Path } from "react-native-svg";

interface Props {
  colour?: string;
  size?: number;
}

export function FireIcon({ colour = "#000000", size = 14 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M11.6666 8.06063C11.6666 10.6965 9.57725 12.8334 6.99992 12.8334C4.42259 12.8334 2.33325 10.6965 2.33325 8.06063C2.33325 7.09919 2.61991 5.48935 3.49992 4.66669L4.70175 6.26912C4.87219 6.49638 5.25331 6.37139 5.26685 6.08764C5.33536 4.65218 5.64639 1.94909 6.99992 1.16669C6.99992 1.16669 11.6666 5.42472 11.6666 8.06063Z"
        stroke={colour}
        strokeWidth="0.875"
        strokeLinejoin="round"
      />
      <Path
        d="M6.99992 11.0833C6.6169 11.0833 6.23762 11.0079 5.88376 10.8613C5.52989 10.7147 5.20836 10.4999 4.93752 10.229C4.66669 9.95818 4.45185 9.63665 4.30527 9.28279C4.15869 8.92892 4.08325 8.54965 4.08325 8.16663"
        stroke={colour}
        strokeWidth="0.875"
        strokeLinecap="round"
      />
    </Svg>
  );
}
