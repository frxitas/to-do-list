import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const IconButton = styled.button`
	${({ size }) =>
		(size == "sm" &&
			css`
				width: 30px;
				height: 30px;
			`) ||
		(size == "md" &&
			css`
				width: 40px;
				height: 40px;
			`)}

	background-color: blueviolet;
	border-radius: 4px;
	color: white;
	border: none;
	outline: none;
	transition: ease-in-out;

	&:hover {
		transition-duration: 125ms;
		box-shadow: 0px 0px 3px blueviolet;
		cursor: pointer;
	}
`;
