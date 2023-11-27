namespace CreatePostScreen {
	interface State {
		postHeading: FieldDataClass;
		images: File[];
		postBody: FieldDataClass;
		loading: Record<string, AsyncState>;
	}
}
