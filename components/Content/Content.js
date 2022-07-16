import React from "react";

import * as Styles from "./Content.styles";

const Content = ({ actions, title, children }) => {
  return (
    <Styles.Content>
      <Styles.ContentWrapper>
        <Styles.ContentTitle>{title}</Styles.ContentTitle>
        <Styles.ContentActions>{actions}</Styles.ContentActions>
      </Styles.ContentWrapper>
      <Styles.ContentData>{children}</Styles.ContentData>
    </Styles.Content>
  );
};

export default Content;
