namespace SignupScreen {
	interface State {
		userName: FieldDataClass;
		email: FieldDataClass;
		password: FieldDataClass;
		loading: Record<string, AsyncState>;
	}
}
