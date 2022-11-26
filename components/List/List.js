import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Styles from "./List.styles";

import {
	deleteCurrentToDo,
	updateTodoList,
} from "../../store/slices/todoSlice";
import IconButton from "../IconButton";
import Checkbox from "../Checkbox/Checkbox";

const List = (props) => {
	const dispatch = useDispatch();

	const [tasks, setTasks] = useState([]);

	const { toDoList } = useSelector((store) => ({
		toDoList: store.todo.toDoList,
	}));

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
			<Styles.ListInfo>
				<Styles.ListLength>Tasks: ({toDoList?.length})</Styles.ListLength>
			</Styles.ListInfo>
			<Styles.List>
				{toDoList
					?.filter((value) => {
						if (value == "") return value;
						else if (
							value.name
								.toString()
								.toLowerCase()
								.includes(props.filter.toLowerCase())
						)
							return value;
					})
					.map((task) => (
						<Styles.ListItem key={`${task.id}`}>
							<Styles.Title>
								<Checkbox
									onChange={() => handleIsChecked(task)}
									isChecked={task.checked}
								/>
								<Styles.ListItemText isChecked={task.checked}>
									{task.name}
								</Styles.ListItemText>
							</Styles.Title>
							<Styles.Actions>
								{task.category && (
									<Styles.Category category={task.category}>
										{task.category}
									</Styles.Category>
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
