import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Fitfo Labs</title>
			</Head>
			<body style={{ overflowX: "hidden" }}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
