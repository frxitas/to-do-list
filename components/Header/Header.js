import React from "react";

import * as Styles from "./Header.styles";

const Header = ({ actions }) => {
	return (
		<Styles.Header>
			<Styles.HeaderTitle>To do</Styles.HeaderTitle>
			<Styles.HeaderWrapper>
				<Styles.HeaderActions>{actions}</Styles.HeaderActions>
			</Styles.HeaderWrapper>
		</Styles.Header>
	);
};

export default Header;
