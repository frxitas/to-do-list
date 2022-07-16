import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ListContent = styled.div`
	display: flex;
	align-items: left;
	justify-content: left;
	flex-direction: column;
	width: 1200px;
	height: 100%;
	min-height: 80px;
	margin: 20px 0px 0px 0px;
`;

export const List = styled.ul`
	width: 100%;
	list-style: none;
	border-radius: 5px;
	padding: 10px 0px;
`;

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	width: 100%;
	margin: 10px 0px 10px 10px;
	padding-right: 10px;
	border: 1.5px solid lightgrey;
	border-radius: 5px;
`;

export const ListItemText = styled.span`
	display: flex;
	align-items: center;
	justify-content: left;
	height: 40px;
	font-size: 14px;
	margin-right: 20px;
	padding: 5px 10px;
	color: blueviolet;
	width: 100%;
`;

export const ListItemCategory = styled.span`
	${({ category }) =>
		(category == "Deveres" &&
			css`
				background-color: #c5ddf0;
			`) ||
		(category == "Estudos" &&
			css`
				background-color: lightcoral;
			`)}
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 30px;
	font-size: 12px;
	margin-right: 10px;
`;
