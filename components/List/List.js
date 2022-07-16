import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Styles from "./List.styles";

import { deleteCurrentToDo } from "../../store/slices/todoSlice";
import IconButton from "../IconButton";

const List = () => {
	const dispatch = useDispatch();

	const { toDoList } = useSelector((store) => ({
		toDoList: store.todo.toDoList,
	}));

	const handleDeleteToDoItem = (item) => {
		dispatch(deleteCurrentToDo(item));
	};

	return (
		<Styles.ListContent>
			<Styles.List>
				{toDoList?.map((item) => (
					<Styles.ListItem key={`${item.id}`}>
						<Styles.ListItemText>{item.name}</Styles.ListItemText>
						<IconButton
							icon={"delete"}
							onClick={() => handleDeleteToDoItem(item)}
						/>
					</Styles.ListItem>
				))}
			</Styles.List>
		</Styles.ListContent>
	);
};

export default List;
