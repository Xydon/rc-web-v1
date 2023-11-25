import React, { useEffect, useState } from "react";
import AuthActions from "./actions/AuthActions";

interface Props {
	children?: React.ReactNode;
}

function AuthGuard(props: Props) {
	const { children } = props;
	const [state, setState] = useState<AuthGuard.State>({
		isLoggedIn: false,
		userDetails: null,
		loading: {},
	});

	const authActions = new AuthActions(state, setState);

	useEffect(() => {
		authActions.isLoggedIn();
	}, []);

	console.log(state);

	return <div>{children}</div>;
}

export default AuthGuard;
