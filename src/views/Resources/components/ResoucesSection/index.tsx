import CollapsibleRenderer from "@/components/CollapsibleRenderer";
import {
	artRequirements,
	embroideries,
	faqs,
	screenPrintings,
} from "@/config/constants";

const ResourcesSection = () => {
	return (
		<div className="space-y-[70px] lg:space-y-[120px]">
			<div>
				<h1 className="__title_xl">Frequently Asked Questions</h1>

				<div className="mt-[30px]">
					<CollapsibleRenderer defaultActiveIndex={0} collapsibles={faqs} />
				</div>
			</div>

			<div>
				<h2 className="__title_xl">Screen printing</h2>

				<div className="mt-[30px]">
					<CollapsibleRenderer collapsibles={screenPrintings} />
				</div>
			</div>
			<div>
				<h1 className="__title_xl">Art Requirements</h1>

				<div className="mt-[30px]">
					<CollapsibleRenderer collapsibles={artRequirements} />
				</div>
			</div>
			<div>
				<h2 className="__title_xl">Embroidery</h2>

				<div className="mt-[30px]">
					<CollapsibleRenderer collapsibles={embroideries} />
				</div>
			</div>
		</div>
	);
};

export default ResourcesSection;
