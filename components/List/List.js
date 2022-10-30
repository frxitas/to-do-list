import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Styles from "./List.styles";

import {
	deleteCurrentToDo,
	updateTodoList,
} from "../../store/slices/todoSlice";
import IconButton from "../IconButton";
import Checkbox from "../Checkbox/Checkbox";

const List = () => {
	const dispatch = useDispatch();

	const [tasks, setTasks] = useState([]);

	const { toDoList } = useSelector((store) => ({
		toDoList: store.todo.toDoList,
	}));
	// console.log(toDoList);

	useEffect(() => {
		if (toDoList !== []) setTasks(toDoList);
	}, [toDoList]);

	const handleIsChecked = (task) => {
		let list = tasks.map((item) => {
			if (item.id == task.id) {
				item = { ...item, checked: !task.checked };
			}
			return item;
		});
		dispatch(updateTodoList(list));
	};

	const handleDeleteToDoItem = (task) => {
		dispatch(deleteCurrentToDo(task));
	};

	return (
		<Styles.ListContent>
			<Styles.List>
				{toDoList?.map((task) => (
					<Styles.ListItem key={`${task.id}`}>
						<Styles.Title>
							<Styles.ListItemText isChecked={task.checked}>
								{task.name}
							</Styles.ListItemText>
							<Checkbox
								onChange={() => handleIsChecked(task)}
								isChecked={task.checked}
							/>
						</Styles.Title>
						<Styles.Actions>
							{task.category && (
								<Styles.ListItemCategory category={task.category}>
									{task.category}
								</Styles.ListItemCategory>
							)}
							<IconButton
								icon={"delete"}
								onClick={() => handleDeleteToDoItem(task)}
							/>
						</Styles.Actions>
					</Styles.ListItem>
				))}
			</Styles.List>
		</Styles.ListContent>
	);
};

export default List;
