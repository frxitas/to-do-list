import { FileSearch, MagnifyingGlass } from "phosphor-react";
import React, { useState } from "react";

/** COMPONENTS */
import Card from "../../components/Card";
import Content from "../../components/Content";
import Input from "../../components/Input";
import List from "../../components/List";
/** END COMPONENTS */

/** LAYOUT */
import DefaultLayout from "../../layout/DefaultLayout";
/** END LAYOUT */

const HomePage = () => {
  const [filter, setFilter] = useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value)
  }

  return (
    <DefaultLayout>
      <Content title={"To Do List"} actions={<Input icon={<MagnifyingGlass size={18} />} onChange={(e) => handleOnChange(e)} placeholder={'Search a task'} />}>
        <Card />
        <List filter={filter} />
      </Content>
    </DefaultLayout>
  );
};

export default HomePage;
