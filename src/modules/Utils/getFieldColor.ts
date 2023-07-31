export default function getFieldColor(
	fieldData: FieldDataClass,
	loadingState?: AsyncState,
	disableValid?: boolean
) {
	const syncColor = fieldData.hasError()
		? "failure"
		: fieldData.isVaild()
		? !disableValid
			? "success"
			: "gray"
		: "gray";

	if (loadingState) {
		if (loadingState.status === "initialized") return "warning";
		else if (loadingState.status === "failed") return "failure";
		else if (
			loadingState.status === "dormant" ||
			loadingState.status === "success"
		)
			return syncColor;

		return syncColor;
	} else return syncColor;
}
