import Layout from "@src/components/Layout/Layout";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import { Badge } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInternInfo } from "../ResearchInterns/fetch/service/getInternList";
import serverInternInfoActions from "./actions/serverActions";

function ResearchInternSpecification() {
	const [state, setState] = useState<ResearchInternsInfo.State>({
		internList: {
			id: "",
			name: "",
			description: "",
			attachments: [],
			postedOn: new Date(),
			institution: "",
			attributes: "",
			isActive: false
		},
		loading: {},
	});

	const {id} = useParams()
	if(!id){
		throw new Error("id not found")
	}
	const actions = new serverInternInfoActions(state,setState)

	useEffect(()=>{
		actions.getinternInfo(id)
	},[])

	console.log("state:",state)
 	
	return (
		<Layout>
			<ResponsiveContainer style={{ paddingBottom: 200 }}>
				<div className="flex gap-x-8 items-center">
					<Typography.H2 className="mb-sys-15 font-semibold">
						{state.internList.name}
					</Typography.H2>
					<Badge color={"success"}>{state.internList.isActive}</Badge>
				</div>
				<div className="flex gap-x-sys-24 mb-sys-63">
					<Typography.BodyEmphasis className="text-rcGreenPrimary font-medium">
						{state.internList.institution}
					</Typography.BodyEmphasis>

					<Typography.BodyEmphasis className="text-zinc-500 font-medium">
						{state.internList.postedOn.toString()}
					</Typography.BodyEmphasis>
				</div>

				<div>
					<Typography.H3 className="mb-sys-15">{state.internList.description}</Typography.H3>
					<Typography.H3 className="mb-sys-15">{state.internList.attributes}</Typography.H3>
				</div>
			</ResponsiveContainer>
		</Layout>
	);
}

export default ResearchInternSpecification;
