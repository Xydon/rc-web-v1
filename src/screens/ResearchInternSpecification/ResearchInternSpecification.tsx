import Layout from "@src/components/Layout/Layout";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import { Badge } from "flowbite-react";
import React from "react";

function ResearchInternSpecification() {
	return (
		<Layout>
			<ResponsiveContainer style={{ paddingBottom: 200 }}>
				<div className="flex gap-x-8 items-center">
					<Typography.H2 className="mb-sys-15 font-semibold">
						Carnegie Mellon Summer Internship
					</Typography.H2>
					<Badge color={"success"}>Active</Badge>
				</div>
				<div className="flex gap-x-sys-24 mb-sys-63">
					<Typography.BodyEmphasis className="text-rcGreenPrimary font-medium">
						Carnegie Mellon
					</Typography.BodyEmphasis>

					<Typography.BodyEmphasis className="text-zinc-500 font-medium">
						12/12/2022
					</Typography.BodyEmphasis>
				</div>

				<div>
					<Typography.H3 className="mb-sys-15">Description</Typography.H3>
					<Typography.H3 className="mb-sys-15">Attachments</Typography.H3>
				</div>
			</ResponsiveContainer>
		</Layout>
	);
}

export default ResearchInternSpecification;
