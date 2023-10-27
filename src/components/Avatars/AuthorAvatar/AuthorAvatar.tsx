import Typography from "@src/components/Typography";
import { Avatar } from "flowbite-react";
import React from "react";

function AuthorAvatar() {
	return (
		<div style={{  }} className="flex gap-x-[16px]">
			<Avatar rounded  />
			<div>
				<Typography.Body className="font-medium">Chirag Goel</Typography.Body>
				<p className="text-sm text-slate-500">14 July 2023</p>
			</div>
		</div>
	);
}

export default AuthorAvatar;
