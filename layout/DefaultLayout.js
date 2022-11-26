import React from "react";

import Container from "../components/Container";
import { Header } from "../components/Header";

const DefaultLayout = ({ children }) => {
	return (
		<Container>
			{children}
		</Container>
	);
};

export default DefaultLayout;
