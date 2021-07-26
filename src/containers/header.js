import React from "react";
import { Header } from "../components";
import logo from "../logo.jpg";
import * as ROUTES from "../constants/routes";


export function HeaderContainer({ children}) {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo to={ROUTES.HOME} src={logo} alt="Zonkil"/>
				<Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
			</Header.Frame>
			{children}
		</Header>
	);
}