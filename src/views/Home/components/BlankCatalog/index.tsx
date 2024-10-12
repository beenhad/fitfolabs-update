import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import Link from "next/link";

const FMGCard = () => {
	return (
		<div className="__card flex flex-col relative justify-center items-center p-[14px] gap-1 text-center">
			<h2 className="__title_lg">FMG Label</h2>
			<p className="__text_sm">Coming Soon</p>
{/* 
			<Link
				href="/resources"
				className="__btn_rounded aspect-square shrink-0 absolute bottom-[14px] left-[14px]"
			>
				<ArrowTopRight />
			</Link> */}
		</div>
	);
};

export default FMGCard;
