import React from "react";
import Card from "../../components/Card";
import List from "../../components/List";

/** COMPONENTS */
import DefaultLayout from "../../layout/DefaultLayout";
/** END COMPONENTS */

const HomePage = () => {
  return (
    <DefaultLayout>
        <Card />
        <List />
    </DefaultLayout>
  );
};

export default HomePage;
