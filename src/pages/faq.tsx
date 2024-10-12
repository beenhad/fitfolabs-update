import AnimateFromBottom from "@/components/AnimateFromBottom";
import MetaTags from "@/components/Head";
import Faq from "@/views/Faq";

const FaqPage = () => {
  return (
		<>
			<MetaTags
				title="Faq"
				description=""
				ogImage=""
				ogTitle=""
				ogDescription=""
			/>
			<AnimateFromBottom>
				<Faq />
			</AnimateFromBottom>
		</>
	);
};

export default FaqPage;
