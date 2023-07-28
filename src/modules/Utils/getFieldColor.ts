export default function getFieldColor(
	fieldData: FieldDataClass,
	loadingState?: AsyncState
) {
	const syncColor = fieldData.hasError()
		? "failure"
		: fieldData.isVaild()
		? "success"
		: "gray";

	if (loadingState) {
		if (loadingState.status === "initialized") return "warning";
		else if (loadingState.status === "failed") return "failure";
		else if (
			loadingState.status === "dormant" ||
			loadingState.status === "success"
		)
			return syncColor;
	}
	return syncColor;
}
