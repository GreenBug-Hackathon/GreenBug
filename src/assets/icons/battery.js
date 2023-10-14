import * as React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SvgBattery = (props) => (
  <Svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M46,18H40V30h6a2,2,0,0,0,2-2V20A2,2,0,0,0,46,18Z"
        fill="#c8c8c8"
      />
      <Rect y={12} width={41} height={24} rx={4} ry={4} fill="#e7e9e9" />
      <Rect x={5} y={16} width={22} height={16} rx={2} ry={2} fill="#4dbe86" />
    </G>
  </Svg>
);
export default SvgBattery;
