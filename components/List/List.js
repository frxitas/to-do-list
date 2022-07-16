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

	const handleDeleteToDoItem = (task) => {
		dispatch(deleteCurrentToDo(task));
	};

	return (
		<Styles.ListContent>
			<Styles.List>
				{toDoList?.map((task) => (
					<Styles.ListItem key={`${task.id}`}>
						<Styles.ListItemText>{task.name}</Styles.ListItemText>
						{task.category && (
							<Styles.ListItemCategory category={task.category}>
								{task.category}
							</Styles.ListItemCategory>
						)}
						<IconButton
							icon={"delete"}
							onClick={() => handleDeleteToDoItem(task)}
						/>
					</Styles.ListItem>
				))}
			</Styles.List>
		</Styles.ListContent>
	);
};

export default List;
