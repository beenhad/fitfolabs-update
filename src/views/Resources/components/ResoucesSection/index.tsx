import CollapsibleRenderer from "@/components/CollapsibleRenderer";
import {
	artRequirements,
	embroideries,
	faqs,
	resources,
	screenPrintings,
	templates
} from "@/config/constants";

const ResourcesSection = () => {
	return (
		<div className="space-y-[70px] lg:space-y-[120px]">
			<div>
				<h1 className="__title_xl">Resources</h1>

				<div className="mt-[30px]">
					<CollapsibleRenderer defaultActiveIndex={0} collapsibles={resources} />
				</div>
			</div>
		</div>
	);
};

export default ResourcesSection;
