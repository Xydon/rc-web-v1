namespace CreateInternList {
	interface State {
		name: FieldDataClass;
		institution: FieldDataClass;
		attributes: FieldDataClass;
		description: FieldDataClass;
		attachments: {
			name: FieldDataClass;
			value: FieldDataClass;
		}[];
    loading: Record<string, AsyncState>
	}
}
