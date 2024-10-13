import AnimateFromBottom from "@/components/AnimateFromBottom";
import MetaTags from "@/components/Head";
import Printing from "@/views/Printing";

const PrintingPage = () => {
	return (
		<>
			<MetaTags
				title="Merchandise & Apparel Printing"
				description=""
				ogImage=""
				ogTitle=""
				ogDescription=""
			/>
			<AnimateFromBottom>
				<Printing />
			</AnimateFromBottom>
		</>
	);
};

export default PrintingPage;
