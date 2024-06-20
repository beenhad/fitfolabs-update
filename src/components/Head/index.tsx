import Head from "next/head";

interface MetaTagsProps {
	title?: string;
	description?: string;
	ogImage?: string;
	ogTitle?: string;
	ogDescription?: string;
}

function MetaTags({
	title = "",
	description = "",
	ogImage = "",
	ogTitle = "",
	ogDescription = "",
}: MetaTagsProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} key="desc" />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			{Boolean(ogImage) && <meta property="og:image" content={ogImage} />}
		</Head>
	);
}

export default MetaTags;
