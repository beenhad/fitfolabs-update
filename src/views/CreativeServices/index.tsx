import GoBackTopBar from "@/components/GoBackTopBar";
import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import ProjectGridLayout from "./components/ProjectGridLayout";

const CrativeServices = () => {
	return (
		<GoBackTopBar>
			<div className="pt-[50px] lg:pt-[60px]">
				<div className="container lg:px-[60px] mb-[55px] lg:mb-[64px]">
					<h1 className="__title_xl">Services</h1>
					<p className="text-lg leading-[24px] lg:text-[26px] lg:leading-[40px] tracking-[0.25px] mt-2.5 mb-5 max-w-[494px]">
					Elevate your brand with our comprehensive Creative Services. We tailor our expertise in design, content, and web development to enhance your visual and digital presence, ensuring your message resonates clearly and creatively.
					</p>

					<div className="flex flex-wrap gap-3.5">
						<button className="__btn md:px-[18px]">
						Graphic Design <ArrowTopRight />
						</button>
						<button className="__btn md:px-[18px]">
						Branding & Identity <ArrowTopRight />
						</button>
						<button className="__btn md:px-[18px]">
						Content Creation <ArrowTopRight />
						</button>
						<button className="__btn md:px-[18px]">
						Web Design & Development <ArrowTopRight />
						</button>
					</div>
				</div>

				<ProjectGridLayout />
			</div>
		</GoBackTopBar>
	);
};

export default CrativeServices;
