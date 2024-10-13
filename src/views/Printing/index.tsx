import GoBackTopBar from "@/components/GoBackTopBar";
import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import ProjectGridLayout from "./components/ProjectGridLayout";

const Printing = () => {
	return (
		<GoBackTopBar>
			<div className="pt-[50px] lg:pt-[60px]">
				<div className="container lg:px-[60px] mb-[55px] lg:mb-[64px]">
					<h1 className="__title_xl">Merchandise & Apparel Printing</h1>
					<p className="text-lg leading-[24px] lg:text-[26px] lg:leading-[40px] tracking-[0.25px] mt-2.5 mb-5 max-w-[494px]">
					Our Printing services specialize in screen printing, offering high-quality, customizable solutions that bring your vision to life. We focus on delivering exceptional clarity and lasting impact through advanced printing technology, tailored to meet your unique needs.
					</p>

					<div className="flex flex-wrap gap-3.5">
						<button className="__btn md:px-[18px]">
						Screenprinting <ArrowTopRight />
						</button>
						<button className="__btn md:px-[18px]">
						4 color process <ArrowTopRight />
						</button>
						<button className="__btn md:px-[18px]">
						Jumbo Prints <ArrowTopRight />
						</button>
						<button className="__btn md:px-[18px]">
						stickers <ArrowTopRight />
						</button>
					</div>
				</div>

				<ProjectGridLayout />
			</div>
		</GoBackTopBar>
	);
};

export default Printing;
