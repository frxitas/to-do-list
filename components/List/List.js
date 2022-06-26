import { Fragment } from "react";
import { useSelector } from "react-redux";

import * as Styles from "./List.styles";

const List = () => {
  const { toDoList } = useSelector((store) => ({
    toDoList: store.todo.toDoList,
  }));

  return (
    <Styles.ListContent>
      <Styles.List>
        {toDoList?.map((item) => (
          <Fragment key={`${item.id}`}>
            <Styles.ListItem>{item.name}</Styles.ListItem>
            <button> delete </button>
          </Fragment>
        ))}
      </Styles.List>
    </Styles.ListContent>
  );
};

export default List;
