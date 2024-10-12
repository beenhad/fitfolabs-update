import AnimateFromBottom from "@/components/AnimateFromBottom";
import MetaTags from "@/components/Head";
import TermsAndConditions from "@/views/TermsAndConditions";

const TermsAndConditionsPage = () => {
	return (
		<>
			<MetaTags
				title="Terms & Conditions"
				description=""
				ogImage=""
				ogTitle=""
				ogDescription=""
			/>
			<AnimateFromBottom>
				<TermsAndConditions />
			</AnimateFromBottom>
		</>
	);
};

export default TermsAndConditionsPage;
