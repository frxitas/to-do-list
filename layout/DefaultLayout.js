import React from "react";

import Container from "../components/Container";
import { Header } from "../components/Header/Header.styles";

const DefaultLayout = ({ children }) => {
	return (
		<Container>
			<Header />
			{children}
		</Container>
	);
};

export default DefaultLayout;
