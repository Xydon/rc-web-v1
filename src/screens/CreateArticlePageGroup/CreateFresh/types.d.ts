namespace CreateArticleScreen {
	interface State {
		heading: FieldDataClass;
		byLine: FieldDataClass;
		body: FieldDataClass;
		note: FieldDataClass;
		loading: Record<string, AsyncState>
	}
}
