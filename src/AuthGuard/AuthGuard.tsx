import React, { useContext, useEffect, useState } from "react";
import UnAuthPage from "./components/UnAuthPage/UnAuthPage";
import AsyncStateFactory from "@src/modules/StateManagement/AsyncState/AsyncStateFactory";
import AuthActions from "./actions/AuthActions";


//* interfaces
interface Props {
	children: React.ReactNode;
}

interface AuthProps {
	user : {
		userId : string; 
		name: string; 
	};
  loginData : UserDetails;
	action: {
		logOut: () => void; 
	}
}


//* context
const AuthGuardContext = React.createContext<AuthProps>({} as AuthProps);
export const useAuthGuardContext = () => useContext(AuthGuardContext);

export default function AuthGuard(props: Props) {
	const [state, setState] = useState<AuthGuard.State>({
    isLoggedIn : false,
		loginData: null,
		loading: {
			getIsLoggedIn: AsyncStateFactory(),
			logout: AsyncStateFactory(),
		},
	});

	const authActions = new AuthActions(state, setState);

	useEffect(() => {
		authActions.isLoggedIn();
	}, []);



	if (state.loading.getIsLoggedIn.status === "initialized") {
		return <></>;
	} else if (
		state.loginData === null
	) {
		return (
			<UnAuthPage
			/>
		);
	} else {
		return (
			<AuthGuardContext.Provider
				value={{
					user: {
						userId: state.loginData.id,
						name: state.loginData.name,
					},
					loginData: state.loginData,
					action: {
						logOut: () => {
							authActions.logout();
						},
					},
				}}
			>
				{props.children}
			</AuthGuardContext.Provider>
		);
	}

	return <></>;
}
