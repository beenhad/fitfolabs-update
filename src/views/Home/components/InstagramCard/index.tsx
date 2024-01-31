import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import CardInstagramIcon from "@/components/Icons/CardInstagramIcon";

const InstagramCard = () => {
  return (
    <div className="__card flex flex-col relative justify-center items-center p-[14px] gap-1 text-center">
      <CardInstagramIcon />

      <a
        href="https://instagram.com/fitfolabs"
        target="_blank"
        className="__btn_rounded absolute bottom-[14px] left-[14px]"
      >
        <ArrowTopRight />
      </a>
    </div>
  );
};

export default InstagramCard;
