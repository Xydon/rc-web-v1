import Layout from "@src/components/Layout/Layout";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import React from "react";

function CreateInternList() {
	return (
		<Layout>
			<ResponsiveContainer>
				<div className="flex justify-between">
					<Typography.H2>Review Articles</Typography.H2>
          
				</div>
			</ResponsiveContainer>
		</Layout>
	);
}

export default CreateInternList;
