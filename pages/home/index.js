import React from "react";

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
  return (
    <DefaultLayout>
      <Content title={"To Do List"} actions={<Input />}>
        <Card />
        <List />
      </Content>
    </DefaultLayout>
  );
};

export default HomePage;
