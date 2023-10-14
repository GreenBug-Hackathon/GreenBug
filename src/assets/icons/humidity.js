import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgHumidity = (props) => (
  <Svg
    height="50"
    width="50"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 496.2 496.2"
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
      <Path
        style={{
          fill: "#25B7D3",
        }}
        d="M496.2,248.1C496.2,111.1,385.1,0,248.1,0S0,111.1,0,248.1s111.1,248.1,248.1,248.1 S496.2,385.1,496.2,248.1z"
      />
      <Path
        style={{
          fill: "#91C5CE",
        }}
        d="M281.3,149.6c-23-36.3-33.1-72.8-33.1-72.8l0,0c0,0-10.1,36.5-33.1,72.8 c-28.2,56.9-73.4,86.8-73.4,158.4c0,61.5,45,111.4,106.5,111.4l0,0c61.5,0,106.5-49.9,106.5-111.4 C354.6,236.4,309.5,206.4,281.3,149.6z"
      />
      <Path
        style={{
          fill: "#B9E4EA",
        }}
        d="M281.3,149.6c-23-36.3-33.1-72.8-33.1-72.8s-61.6,342.6,0,342.6l0,0c61.5,0,106.5-49.9,106.5-111.4 C354.6,236.4,309.5,206.4,281.3,149.6z"
      />
      <Path
        style={{
          fill: "#F2F7F7",
        }}
        d="M254.2,401.2L254.2,401.2c48.2,0,83.4-39.1,83.4-87.2C337.6,258,206,401.2,254.2,401.2z"
      />
    </G>
  </Svg>
);
export default SvgHumidity;
