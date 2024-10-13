import AnimateFromBottom from "@/components/AnimateFromBottom";
import MetaTags from "@/components/Head";
import Accessories from "@/views/Accessories";
import CreativeServices from "@/views/CreativeServices";

const CreativeServicesPage = () => {
	return (
		<>
			<MetaTags
				title="Services"
				description=""
				ogImage=""
				ogTitle=""
				ogDescription=""
			/>
			<AnimateFromBottom>
				<CreativeServices />
			</AnimateFromBottom>
		</>
	);
};

export default CreativeServicesPage;
