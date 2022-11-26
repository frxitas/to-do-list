import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Input = styled.div`
	${({ hasLabel }) => css`
		height: auto;
		padding-top: ${hasLabel ? "30px" : 0};
		position: relative;
		width: 100%;
	`}
`;

export const InputContent = styled.div`
	display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1.5px solid lightgrey;
  width: 300px;
  height: 40px;
  line-height: 160%;
  padding: 0 10px;
  position: relative;
  outline: none;
  border-radius: 5px;
  font-size: 14px;

  :focus-within {
    border: 2px solid blueviolet;
  }
`;

export const InputLabel = styled.label`
	font-size: 14px;
	display: block;
	position: absolute;
	color: black;
	line-height: 2;
	top: 0;
	width: 100%;
	transition: all ease-in-out 300ms;

	${({ isInputFocused }) =>
		isInputFocused &&
		css`
			color: black;
			font-weight: 600;
		`}

	${({ isInputDisabled }) =>
		isInputDisabled &&
		css`
			color: lightgrey;
		`}
`;

export const InputTag = styled.input`
	background-color: white;
	width: 260px;
	height: 30px;
	line-height: 200%;
	position: relative;
	border: none;
	outline: none;
	font-size: 16px;
`;
