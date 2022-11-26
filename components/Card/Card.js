import React, { useEffect, useState } from "react";
import Input from "../Input";

import { useSelector, useDispatch } from "react-redux";

import * as Styles from "./Card.Styles";

import { createNewToDo } from "../../store/slices/todoSlice";
import IconButton from "../IconButton";
import Select from "../Select/Select";

const Card = () => {
	const dispatch = useDispatch();

	const [task, setTask] = useState("");
	const [category, setCategory] = useState("Estudos");
	const [generateId, setGenerateId] = useState(0);

	const { toDoList } = useSelector((store) => ({
		toDoList: store.todo.toDoList,
	}));

	useEffect(() => {
		if (toDoList) setGenerateId(toDoList.length + 1);
	}, [toDoList]);

	const handleTask = (e) => {
		setTask(e.target.value);
	};

	const handleCategory = (e) => {
		setCategory(e.target.value);
	};

	const createNewTask = () => {
		dispatch(
			createNewToDo({
				id: generateId,
				name: task,
				category: category,
				checked: false,
			}),
		);
		setTask("");
		setCategory("");
	};

	return (
		<Styles.Card>
			<Styles.CardContent>
				<Input
					label={"Name"}
					placeholder={"Insert a name"}
					value={task}
					onChange={handleTask}
				/>
				<Select
					label={"Category"}
					placeholder={"Insert a category"}
					value={category}
					onChange={handleCategory}
				>
					<option value={"Estudos"}>Estudos</option>
					<option value={"Deveres"}>Deveres</option>
					<option value={"Lembretes"}>Lembretes</option>
				</Select>
				<Styles.CardButton>
					<IconButton icon={"add"} onClick={createNewTask} />
				</Styles.CardButton>
			</Styles.CardContent>
		</Styles.Card>
	);
};

export default Card;
