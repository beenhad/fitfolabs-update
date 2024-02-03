import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import LockedSwitchIcon from "@/components/Icons/SwitchLockIcon";

const LockedSwitchCard = () => {
  return (
    <div className="__card flex flex-col relative justify-center items-center p-[14px] gap-1 text-center">
      <h2 className="__title_lg">Online Store</h2>
      <p className="__text_sm"></p>

      <a
        href="https://store.fitfolabs.com/"
        target="_blank"
        className="__btn_rounded absolute bottom-[14px] left-[14px]"
      >
        <ArrowTopRight />
      </a>
    </div>
  );
};

export default LockedSwitchCard;
