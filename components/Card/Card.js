import React, { useState } from "react";
import Input from "../Input";

import { useSelector, useDispatch } from "react-redux";

import * as Styles from "./Card.Styles";

import { createNewToDo } from "../../store/slices/todoSlice";

const Card = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState({});

  const { toDoList } = useSelector((store) => ({
    toDoList: store.todo.toDoList,
  }));
  console.log(toDoList.length);

  const handleSetTask = (e) => {
    let toDoName = e.target.value;
    setTask({ id: 1, name: toDoName });
  };

  const createNewTask = () => {
    dispatch(createNewToDo());
  };

  return (
    <Styles.Card>
      <Styles.CardContent>
        <Input label={"Insert a to do"} onChange={handleSetTask} />
        <button onClick={createNewTask}>create new</button>
      </Styles.CardContent>
    </Styles.Card>
  );
};

export default Card;
