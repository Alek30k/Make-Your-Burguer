import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#5243C2"
      d="M10.667 12v1.333H3.333V12h7.334ZM14 7.333v1.334H2V7.333h12Zm-1.333-4.666V4H5.333V2.667h7.334Z"
    />
  </svg>
);
export default SvgComponent;
