import React, { useEffect, useState } from "react";
import Input from "../Input";

import { useSelector, useDispatch } from "react-redux";

import * as Styles from "./Card.Styles";

import { createNewToDo } from "../../store/slices/todoSlice";
import IconButton from "../IconButton";

const Card = () => {
	const dispatch = useDispatch();

	const [task, setTask] = useState("");
	const [generateId, setGenerateId] = useState(0);

	const { toDoList } = useSelector((store) => ({
		toDoList: store.todo.toDoList,
	}));

	useEffect(() => {
		if (toDoList) setGenerateId(toDoList.length + 1);
	}, [toDoList]);

	const handleSetTask = (e) => {
		setTask(e.target.value);
	};

	const createNewTask = () => {
		dispatch(createNewToDo({ id: generateId, name: task }));
		setTask("");
	};

	return (
		<Styles.Card>
			<Styles.CardContent>
				<Input label={"Insert a to do"} value={task} onChange={handleSetTask} />
				<Styles.CardButton>
					<IconButton icon={"add"} onClick={createNewTask} />
				</Styles.CardButton>
			</Styles.CardContent>
		</Styles.Card>
	);
};

export default Card;
