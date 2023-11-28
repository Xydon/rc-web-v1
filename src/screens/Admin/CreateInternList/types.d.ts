namespace CreateInternList {
	interface State {
		name: FieldDataClass;
		institution: FieldDataClass;
		attributes: FieldDataClass;
		description: FieldDataClass;
		attachments: {
      id: string;
			name: FieldDataClass;
			value: FieldDataClass;
		}[];
    loading: Record<string, AsyncState>
	}
}
