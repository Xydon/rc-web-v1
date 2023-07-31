import getFieldColor from "@src/modules/Utils/getFieldColor";
import { Label, LabelProps, TextInput, TextInputProps } from "flowbite-react";
import React, { FC, RefAttributes } from "react";

export interface RIFormField {
	fieldData: FieldDataClass;
	labelProps: FC<LabelProps>;
	inputProps: TextInputProps & RefAttributes<HTMLInputElement>;
	loadingState?: AsyncState;
	disableValid?: boolean | undefined;
}

export namespace PIFormField {}

export default function FormField({
	fieldData,
	labelProps,
	inputProps,
	loadingState,
	disableValid,
}: RIFormField) {
	return (
		<>
			<div className="mb-2 block">
				<Label
					{...labelProps}
					color={getFieldColor(fieldData, loadingState, disableValid)}
				/>
			</div>
			<TextInput
				{...inputProps}
				helperText={<>{fieldData.getError()}</>}
				color={getFieldColor(fieldData)}
			/>
		</>
	);
}
