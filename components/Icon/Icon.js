import React from "react";

import { useTheme } from "@emotion/react";

const Icon = ({ name, ...restProps }) => {
	const theme = useTheme();

	const SVGIcon = () =>
		theme?.icons?.[name] || `${name} was not found on icons list`;

	return <SVGIcon {...restProps} />;
};

export default Icon;
