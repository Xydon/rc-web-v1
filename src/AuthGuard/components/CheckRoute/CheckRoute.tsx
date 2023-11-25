// import { useAuthGuardContext } from "@src/AuthGuard/AuthGuard";
import React from "react";
import UnAuthPage from "../UnAuthPage/UnAuthPage";
import { useAuthGuardContext } from "@src/AuthGuard/AuthGuard";

interface Props {}

function CheckRoute(props: { role?: UserRole; children: React.ReactNode }) {
	const { role, children } = props;
	const { userDetails } = useAuthGuardContext();

	const com = <>{children}</>;

	if (role === undefined) {
		return com;
	}

	if (userDetails === null || userDetails.role !== role) {
		return <UnAuthPage />;
	}

	return com;
}

export default CheckRoute;
