import React, { useContext, useEffect, useState } from "react";
import AuthActions from "./actions/AuthActions";

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
		loading: {},
	});

	const authActions = new AuthActions(state, setState);

	useEffect(() => {
		authActions.isLoggedIn();
	}, []);

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
}

export default AuthGuard;
