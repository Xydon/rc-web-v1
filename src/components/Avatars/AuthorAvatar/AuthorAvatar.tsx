import Typography from "@src/components/Typography";
import { Avatar } from "flowbite-react";
import React from "react";

interface Props {
	name?: string;
	sub?: string;
}

function AuthorAvatar(props : Props) {
	return (
		<div style={{  }} className="flex gap-x-[16px]">
			<Avatar rounded  />
			<div>
				<Typography.Body className="font-medium">{props.name ? props.name : "Name"}</Typography.Body>
				<p className="text-sm text-slate-500">{props.sub ? props.sub : 'subheaing'}</p>
			</div>
		</div>
	);
}

export default AuthorAvatar;
