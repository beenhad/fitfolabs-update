import AnimateFromBottom from "@/components/AnimateFromBottom";
import MetaTags from "@/components/Head";
import ArtRequirements from "@/views/ArtRequirements";

const ArtRequirementsPage = () => {
	return (
		<>
			<MetaTags
				title="Art requirements"
				description=""
				ogImage=""
				ogTitle=""
				ogDescription=""
			/>
			<AnimateFromBottom>
				<ArtRequirements />
			</AnimateFromBottom>
		</>
	);
};

export default ArtRequirementsPage;
