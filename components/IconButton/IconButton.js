import { forwardRef, useCallback } from "react";
import Icon from "../Icon/Icon";
import * as Styles from "./IconButton.styles";

const IconButton = forwardRef(({ icon, ...restProps }, ref) => {
	return (
		<Styles.IconButton ref={ref} {...restProps}>
			<Icon name={icon} />
		</Styles.IconButton>
	);
});

export default IconButton;

IconButton.displayName = "IconButton";
