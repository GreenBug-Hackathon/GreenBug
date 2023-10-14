import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
const SvgFire = (props) => (
  <Svg
    height="200px"
    width="200px"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 508 508"
    xmlSpace="preserve"
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
      <Circle
        style={{
          fill: "#FFD05B",
        }}
        cx={254}
        cy={254}
        r={254}
      />
      <Path
        style={{
          fill: "#FF7058",
        }}
        d="M339.6,161.6c0.8,15.6-6.8,31.2-17.6,47.6c8.8-53.2-8.8-112.8-79.6-140.4c6,22.4-8.4,50-22.4,80 c-8.4-9.6-18-18.8-29.6-27.6c5.6,74.4-157.6,148.8-25.2,276c0,0,8.8,5.6,24.4,11.2c-0.4-0.4-0.8-0.8-1.2-1.2l0,0 c-28.4-30.8-44-94.4,10-136.4c-0.8,10.4,4.4,20.4,11.6,30.8c-5.6-34.4,5.6-73.2,51.6-91.2c-4,14.4,5.6,32.4,14.4,52 c5.2-6.4,11.6-12.4,19.2-18c-2.8,39.6,70.8,80.4,44.4,140.8c5.2-4,10.4-8.4,15.2-13.6l0,0C398.4,324.4,422.4,226.4,339.6,161.6z"
      />
    </G>
  </Svg>
);
export default SvgFire;
