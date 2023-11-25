import React, { useContext, useEffect, useState } from "react";
import AuthActions from "./actions/AuthActions";
import AsyncStateFactory from "@src/modules/StateManagement/AsyncState/AsyncStateFactory";

interface Props {
	children?: React.ReactNode;
}

export interface AuthContextType {
	userDetails: UserDetails | null;
	isLoggedIn: boolean;
	actions: {
		login: (d: UserDetails) => void;
		logout: () => Promise<void>;
	};
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
export const useAuthGuardContext = () => useContext(AuthContext);

function AuthGuard(props: Props) {
	const { children } = props;
	const [state, setState] = useState<AuthGuard.State>({
		isLoggedIn: false,
		userDetails: null,
		loading: {
			isLoggedIn: AsyncStateFactory(),
		},
	});

	const authActions = new AuthActions(state, setState);

	useEffect(() => {
		authActions.isLoggedIn();
	}, []);

	if (state.loading.isLoggedIn.status === "success")
		return (
			<AuthContext.Provider
				value={{
					userDetails: state.userDetails,
					isLoggedIn: state.isLoggedIn,
					actions: {
						login: (d) => {
							authActions.setUserDetails(d);
						},
						logout: async () => {},
					},
				}}
			>
				{children}
			</AuthContext.Provider>
		);
	return <></>;
}

export default AuthGuard;
