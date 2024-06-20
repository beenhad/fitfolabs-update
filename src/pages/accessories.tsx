import AnimateFromBottom from "@/components/AnimateFromBottom";
import MetaTags from "@/components/Head";
import Accessories from "@/views/Accessories";

const AccessoriesPage = () => {
	return (
		<>
			<MetaTags
				title="Accessories"
				description=""
				ogImage=""
				ogTitle=""
				ogDescription=""
			/>
			<AnimateFromBottom>
				<Accessories />
			</AnimateFromBottom>
		</>
	);
};

export default AccessoriesPage;
