import { forwardRef, useCallback } from "react";
import Icon from "../Icon/Icon";
import * as Styles from "./IconButton.styles";

const IconButton = forwardRef(({ icon, size = 'sm', ...restProps }, ref) => {
	return (
		<Styles.IconButton ref={ref} size={size} {...restProps}>
			<Icon name={icon} />
		</Styles.IconButton>
	);
});

export default IconButton;

IconButton.displayName = "IconButton";
