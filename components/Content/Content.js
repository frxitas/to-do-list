import React from "react";

import * as Styles from "./Content.styles";

const Content = ({ actions, title, children }) => {
  return (
    <Styles.Content>
      <Styles.ContentData>{children}</Styles.ContentData>
    </Styles.Content>
  );
};

export default Content;
