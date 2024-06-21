import GoBackTopBar from "@/components/GoBackTopBar";
import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import ProjectGridLayout from "./components/ProjectGridLayout";

const TShirt = () => {
  return (
    <GoBackTopBar>
      <div className="pt-[50px] lg:pt-[60px]">
        <div className="container lg:px-[60px] mb-[55px] lg:mb-[64px]">
          <h1 className="__title_xl">T-Shirts</h1>
          <p className="text-lg leading-[24px] lg:text-[26px] lg:leading-[40px] tracking-[0.25px] mt-2.5 mb-5 max-w-[494px]">
          Elevate Your Essentials. Expertly printed to transform your designs into wardrobe staples.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <button className="__btn md:px-[18px]">
              Plastisol <ArrowTopRight />
            </button>
            <button className="__btn md:px-[18px]">
              Water Based <ArrowTopRight />
            </button>
            <button className="__btn md:px-[18px]">
            4 Color Process <ArrowTopRight />
            </button>
            <button className="__btn md:px-[18px]">
            Jumbo Print <ArrowTopRight />
            </button>
            <button className="__btn md:px-[18px]">
            Specialty Inks <ArrowTopRight />
            </button>
          </div>
        </div>

        <ProjectGridLayout />
      </div>
    </GoBackTopBar>
  );
};

export default TShirt;
