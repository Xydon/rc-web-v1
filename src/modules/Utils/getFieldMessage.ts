export default function getFieldMessage(
	fieldData: FieldDataClass,
	config?: {
		loadingState: AsyncState;
		messageConfig: {
			onInitializedMessage: string;
			onSuccessMessage?: string;
			onFailureMessage?: string;
		};
	}
) {
	const defaultMessage = fieldData.getError();

	if (config) {
		const {
			loadingState: { message, status },
			messageConfig,
		} = config;

		if (status === "initialized") return messageConfig.onInitializedMessage;
		else if (status === "dormant") return defaultMessage;
		else if (status === "failed") {
			if (messageConfig.onFailureMessage) {
				return messageConfig.onFailureMessage;
			} else {
				return "server error, cannot validate";
			}
		} else if (status === "success") {
			if (messageConfig.onSuccessMessage) return messageConfig.onSuccessMessage;
			else return defaultMessage;
		}

		return defaultMessage;
	}

	return defaultMessage;
}
