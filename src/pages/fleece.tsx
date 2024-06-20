import AnimateFromBottom from "@/components/AnimateFromBottom";
import MetaTags from "@/components/Head";
import Fleece from "@/views/Fleece";

const FleecePage = () => {
	return (
		<>
			<MetaTags
				title="Fleece"
				description=""
				ogImage=""
				ogTitle=""
				ogDescription=""
			/>
			<AnimateFromBottom>
				<Fleece />
			</AnimateFromBottom>
		</>
	);
};

export default FleecePage;
