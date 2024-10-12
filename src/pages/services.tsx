import AnimateFromBottom from "@/components/AnimateFromBottom";
import MetaTags from "@/components/Head";
import Services from "@/views/Services";

const ServicesPage = () => {
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
				<Services />
			</AnimateFromBottom>
		</>
	);
};

export default ServicesPage;
