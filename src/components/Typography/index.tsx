import React from "react";
import style from './index.module.scss';

interface TypeProps {
	children?: React.ReactNode;
}

function H1(props: TypeProps & React.HTMLAttributes<HTMLHeadingElement>) {
	const { children, ...rest } = props;
	return (
		<h1 {...rest} className={style.h1 + " " + rest.className}>
			{children}
		</h1>
	);
}

function H2(props: TypeProps & React.HTMLAttributes<HTMLHeadingElement>) {
	const { children, ...rest } = props;
	return (
		<h2 {...rest} className={style.h2 + " " + rest.className}>
			{children}
		</h2>
	);
}

function H3(props: TypeProps & React.HTMLAttributes<HTMLHeadingElement>) {
	const { children, ...rest } = props;
	return (
		<h2 {...rest} className={style.h3 + " " + rest.className}>
			{children}
		</h2>
	);
}

function BodyLarge(
	props: TypeProps & React.HTMLAttributes<HTMLHeadingElement>
) {
	const { children, ...rest } = props;
	return (
		<p {...rest} className={style.bodyLarge + " " + rest.className}>
			{children}
		</p>
	);
}

function Body(props: TypeProps & React.HTMLAttributes<HTMLHeadingElement>) {
	const { children, ...rest } = props;
	return (
		<p {...rest} className={style.body + " " + rest.className}>
			{children}
		</p>
	);
}

function BodyEmphasis(
	props: TypeProps & React.HTMLAttributes<HTMLHeadingElement>
) {
	const { children, ...rest } = props;
	return (
		<p {...rest} className={style.bodyemphasis + " " + rest.className}>
			{children}
		</p>
	);
}

const Typography = {
	H1,
	H2,
	H3,
	Body,
	BodyEmphasis,
	BodyLarge,
};

export default Typography;
