import GoBackTopBar from "@/components/GoBackTopBar";
import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import ProjectGridLayout from "./components/ProjectGridLayout";

const EventSpace = () => {
	return (
		<GoBackTopBar>
			<div className="pt-[50px] lg:pt-[60px]">
				<div className="container lg:px-[60px] mb-[55px] lg:mb-[64px]">
					<h1 className="__title_xl">Event Space</h1>
					<p className="text-lg leading-[24px] lg:text-[26px] lg:leading-[40px] tracking-[0.25px] mt-2.5 mb-5 max-w-[494px]">
					Our Event Space is designed to host a diverse range of gatherings. From professional corporate events to intimate private celebrations, our adaptable venue is equipped to ensure your event is a success, supported by top-notch amenities and a flexible layout.
					</p>

					<div className="flex flex-wrap gap-3.5">
						<button className="__btn md:px-[18px]">
						Music Videos <ArrowTopRight />
						</button>
						<button className="__btn md:px-[18px]">
						Holiday Parties <ArrowTopRight />
						</button>
						<button className="__btn md:px-[18px]">
						Popup Shop <ArrowTopRight />
						</button>
						<button className="__btn md:px-[18px]">
						Private Session <ArrowTopRight />
						</button>
					</div>
				</div>

				<ProjectGridLayout />
			</div>
		</GoBackTopBar>
	);
};

export default EventSpace;
