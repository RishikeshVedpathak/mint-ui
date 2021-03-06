import React, { SVGProps } from "react";

const SvgKeyboardArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg width={18} height={18} {...props}>
		<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
		<path fill="none" d="M0 0h24v24H0V0z" />
	</svg>
);

export default SvgKeyboardArrowDown;
