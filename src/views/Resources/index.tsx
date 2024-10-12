import GoBackTopBar from "@/components/GoBackTopBar";
import ResourcesSection from "./components/ResoucesSection";

const Resources = () => {
	return (
		<>
			<GoBackTopBar>
				<div className="container_md">
					<ResourcesSection />
				</div>
			</GoBackTopBar>
		</>
	);
};

export default Resources;
