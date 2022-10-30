import React, { useState } from "react";

import * as Styles from "./Checkbox.styles";

import { Check } from "phosphor-react";

const Checkbox = ({ onChange, isChecked }) => {
	return (
		<label>
			<Styles.Indicator
				type={"checkbox"}
				onChange={onChange}
			/>
			<Check
				size={16}
				weight={"bold"}
				style={{
					display: "inline-block",
					height: "18px",
					width: "18px",
					background: isChecked ? "blueviolet" : "#fff",
					border: isChecked ? "2px blueviolet solid" : "2px #ddd solid",
					borderRadius: "4px",
					marginRight: "4px",
					color: isChecked ? " #FFF" : "transparent",
					cursor: "pointer",
				}}
			/>
		</label>
	);
};

export default Checkbox;
