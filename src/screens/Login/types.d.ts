namespace LoginScreen {
	interface State {
		email: FieldDataClass;
		password: FieldDataClass;
	}

	interface LoadingStates {
		loading: {
			loggingIn: AsyncState;
		};
	}
}
