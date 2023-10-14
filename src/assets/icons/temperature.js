import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
const SvgTemperature = (props) => (
  <Svg
    height="50"
    width="50"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 473.931 473.931"
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
          fill: "#F2BE3E",
        }}
        cx={236.966}
        cy={236.966}
        r={236.966}
      />
      <Path
        style={{
          fill: "#FFFFFF",
        }}
        d="M265.624,282.776V74.966c0-15.828-12.834-28.677-28.669-28.677 c-15.843,0-28.677,12.849-28.677,28.677v207.806c-27.349,11.293-46.596,38.185-46.596,69.582c0,41.56,33.713,75.258,75.273,75.258 c41.552,0,75.265-33.698,75.265-75.258C312.22,320.957,292.957,294.05,265.624,282.776z"
      />
      <G>
        <Path
          style={{
            fill: "#E84849",
          }}
          d="M256.498,331.213V189.573c0-10.787-8.756-19.547-19.543-19.547s-19.551,8.759-19.551,19.547v141.641 C198.777,338.91,275.117,338.902,256.498,331.213z"
        />
        <Circle
          style={{
            fill: "#E84849",
          }}
          cx={237.003}
          cy={353.447}
          r={68.149}
        />
      </G>
      <G>
        <Path
          style={{
            fill: "#F59C9E",
          }}
          d="M217.456,81.552v10.421h25.066V81.552H217.456z M217.456,126.756h32.55v-10.428h-32.55 L217.456,126.756L217.456,126.756z M217.456,161.543h25.066v-10.44h-25.066L217.456,161.543L217.456,161.543z"
        />
        <Path
          style={{
            fill: "#F59C9E",
          }}
          d="M217.456,196.603h32.55v-10.428h-32.55L217.456,196.603L217.456,196.603z M217.456,267.697h32.55 v-10.428h-32.55L217.456,267.697L217.456,267.697z M217.456,231.39h25.066v-10.443h-25.066L217.456,231.39L217.456,231.39z"
        />
        <Path
          style={{
            fill: "#F59C9E",
          }}
          d="M187.163,359.542c-9.875-9.863,0.965-37.186,10.832-47.049c9.867-9.863,33.754-19.233,43.614-9.366 C251.476,312.994,197.03,369.409,187.163,359.542z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgTemperature;
