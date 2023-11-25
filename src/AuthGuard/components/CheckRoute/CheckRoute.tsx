// import { useAuthGuardContext } from "@src/AuthGuard/AuthGuard";
import React from "react";
import UnAuthPage from "../UnAuthPage/UnAuthPage";

function CheckRoute(props: { role?: UserRole; children: React.ReactNode }) {
	const { role: crole, children } = props;
	// const { loginData } = useAuthGuardContext();
	// if (crole === undefined || crole !== loginData.role) return <UnAuthPage />;
	return <>{children}</>;
}

export default CheckRoute;
