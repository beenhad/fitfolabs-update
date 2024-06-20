import AnimateFromBottom from "@/components/AnimateFromBottom";
import MetaTags from "@/components/Head";
import Resources from "@/views/Resources";

const ResoucesPage = () => {
	return (
		<>
			<MetaTags
				title="Resources"
				description=""
				ogImage=""
				ogTitle=""
				ogDescription=""
			/>
			<AnimateFromBottom>
				<Resources />
			</AnimateFromBottom>
		</>
	);
};

export default ResoucesPage;
