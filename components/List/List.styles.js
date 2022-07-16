import styled from "@emotion/styled";

export const ListContent = styled.div`
	display: flex;
	align-items: left;
	justify-content: left;
	width: 500px;
	height: 100%;
  min-height: 100px;
	box-shadow: 0px 0px 10px lightgrey;
	border-radius: 5px;
`;

export const List = styled.ul`
	width: 100%;
	list-style: none;
	padding: 20px;
`;

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	margin: 10px;
	width: auto;
	border: 1.5px solid lightgrey;
	border-radius: 5px;
`;

export const ListItemText = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;

	font-size: 16px;
	color: blueviolet;
	width: fit-content;
	margin: 10px;
`;
