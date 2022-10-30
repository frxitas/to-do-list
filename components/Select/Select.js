import React, { forwardRef, useCallback, useState } from "react";

import * as Styles from "./Select.styles";

const Select = forwardRef(
	({ label, placeholder, children, ...restProps }, ref) => {
		const [isSelectFocused, setIsSelectFocused] = useState(false);

		const handleOnBlur = useCallback((e) => {
			setIsSelectFocused(false);

			if (restProps?.onBlur && typeof restProps.onBlur === "function")
				restProps?.onBlur(e);
		}, [restProps]);

		const handleOnChange = useCallback((e) => {
			if (restProps?.onChange && typeof restProps.onChange === "function")
				restProps?.onChange(e);
		}, [restProps]);

		const handleOnFocus = useCallback((e) => {
			setIsSelectFocused(true);

			if (restProps?.onFocus && typeof restProps.onFocus === "function")
				restProps?.onFocus(e);
		},	[restProps]);

		return (
			<Styles.Select hasLabel={label}>
				{label && (
					<Styles.SelectLabel
						isSelectFocused={isSelectFocused}
						isSelectDisabled={restProps?.disabled}
					>
						{label}
					</Styles.SelectLabel>
				)}
				<Styles.SelectTag
					ref={ref}
					placeholder={placeholder}
					{...restProps}
					name={restProps?.name}
					onBlur={handleOnBlur}
					onChange={handleOnChange}
					onFocus={handleOnFocus}
				>
					{children}
				</Styles.SelectTag>
			</Styles.Select>
		);
	},
);

export default Select;

Select.displayName = "Select";
