import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ListContent = styled.div`
	display: flex;
	align-items: left;
	justify-content: left;
	flex-direction: column;
	width: 1200px;
	height: 100%;
	min-height: 200px;
	padding: 0px 16px;
	border-left: 1.5px solid lightgrey;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: left;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
	list-style: none;
	column-gap: 16px;
`;

export const ListItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: space-between;
	height: 160px;
	width: 200px;
	padding: 12px;
	box-shadow: 2px 2px 5px lightgrey;
	border-radius: 4px;
`;

export const Title = styled.div`
	display: flex;
	width: 100%;
	height: 40px;
	flex-direction: row;
	justify-content: space-between;
	/* align-items: center; */
`

export const ListItemText = styled.span`
	font-size: 18px;
	font-weight: 500;
	color: black;
	width: 100%;
	cursor: pointer;

	:hover {
		text-decoration: underline;
	}

	${({ isChecked }) =>
		isChecked == true &&
		css`
			text-decoration: line-through;
			color: darkgrey;
		`}
`;

export const Actions = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
`

export const CategoryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`

export const Category = styled.span`
	${({ category }) =>
		(category == "Deveres" &&
			css`
				background-color: #c5ddf0;
			`) ||
		(category == "Estudos" &&
			css`
				background-color: lightcoral;
			`) ||
		(category == "Lembretes" &&
			css`
				background-color: lightgreen;
			`)}
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: 26px;
	font-size: 14px;
	margin-right: 10px;
	border-radius: 4px;
	padding: 6px;
`;
