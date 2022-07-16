import React, { useEffect, useState } from "react";
import Input from "../Input";

import { useSelector, useDispatch } from "react-redux";

import * as Styles from "./Card.Styles";

import { createNewToDo } from "../../store/slices/todoSlice";
import Button from "../Button";

const Card = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState({});
  const [id, setId] = useState(0);

  const { toDoList } = useSelector((store) => ({
    toDoList: store.todo.toDoList,
  }));

  useEffect(() => {
    if (toDoList) setId(toDoList.length);
  }, [toDoList]);

  const handleSetTask = (e) => {
    setTask({ id: id, name: e.target.value });
  };

  const createNewTask = () => {
    dispatch(createNewToDo(task));
  };

  return (
    <Styles.Card>
      <Styles.CardContent>
        <Input label={"Insert a to do"} onChange={handleSetTask} />
        <Button onClick={createNewTask}>create new</Button>
      </Styles.CardContent>
    </Styles.Card>
  );
};

export default Card;
