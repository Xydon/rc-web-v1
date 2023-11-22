namespace LoginScreen {
	interface State {
		email: FieldDataClass;
		password: FieldDataClass;

		loading: {
			loggingIn: AsyncState;
		};
	}
}
