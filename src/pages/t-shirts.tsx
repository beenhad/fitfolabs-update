import AnimateFromBottom from "@/components/AnimateFromBottom";
import MetaTags from "@/components/Head";
import TShirt from "@/views/TShirt";

const TShirtsPage = () => {
  return (
		<>
			<MetaTags
				title="T-Shirts"
				description=""
				ogImage=""
				ogTitle=""
				ogDescription=""
			/>
			<AnimateFromBottom>
				<TShirt />
			</AnimateFromBottom>
		</>
	);
};

export default TShirtsPage;
