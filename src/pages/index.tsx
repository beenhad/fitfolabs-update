import MetaTags from "@/components/Head";
import { getAbsoluteUrl } from "@/utils";
import Home from "@/views/Home";

const HomePage = () => {
	return (
		<>
			<MetaTags
				title="Fitfo Labs"
				description=""
				ogImage={getAbsoluteUrl("/img/hats-reveal.png")} // put image path getAbsoluteUrl function
				ogTitle=""
				ogDescription=""
			/>
			<Home />
		</>
	);
};

export default HomePage;
