import AnimateFromBottom from "@/components/AnimateFromBottom";
import MetaTags from "@/components/Head";
import EventSpace from "@/views/EventSpace";

const EventSpacePage = () => {
	return (
		<>
			<MetaTags
				title="Event Space"
				description=""
				ogImage=""
				ogTitle=""
				ogDescription=""
			/>
			<AnimateFromBottom>
				<EventSpace />
			</AnimateFromBottom>
		</>
	);
};

export default EventSpacePage;
