import useEnableGridLayoutTransition from "@/hooks/useEnableGridLayoutTransition";
import useHomeGridLayout from "@/hooks/useHomeGridLayout";
import useIsLayoutDraggable from "@/hooks/useIsLayoutDraggable";
import { cx } from "@/utils";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import FMGCard from "../BlankCatalog";
import InstagramCard from "../InstagramCard";
import StoreCard from "../LockedSwitchCard";
import ProjectCard from "../ProjectCard";
import TextCard from "../TextCard";
import Image from "next/image";

const MapCard = dynamic(() => import("../MapCard"), { ssr: false });

const ResponsiveGridLayout = WidthProvider(Responsive);

const cards = {
	a: (
		<TextCard
			button={{ text: "Book Now", url: "https://cal.com/fitfo/15min" }}
			title="Creative Strategy Meeting"
			description="Elevate your ideas with our specialized 90-minute creative consultations."
		/>
	),
	b:<FMGCard />,
	c: (
		<ProjectCard
			img={{
				src: "/img/t-shirts.png",
				width: 1215,
				height: 2500,
				alt: "tShirt",
			}}
			hoverImg={{
				src: "/img/t-shirts-reveal.png",
				width: 1215,
				height: 2500,
				alt: "tShirt",
			}}
			link={{
				text: "Services",
				url: "/creative-services",
			}}
		/>
	),
	d: <StoreCard />,
	e:  <MapCard /> ,
	f: (
		<ProjectCard
			img={{
				src: "/img/hoodies.png",
				width: 1215,
				height: 2500,
				alt: "hoodie",
			}}
			hoverImg={{
				src: "/img/hoodies-reveal.png",
				width: 1215,
				height: 2500,
				alt: "hoodie",
			}}
			link={{
				text: "Printing",
				url: "/printing",
			}}
		/>
	),
	g: (
		<TextCard
			button={{ text: "Event Space", url: "/event-space" }}
			title="Event Space"
			description="Our space elevates your event, from concept to reality."
		/>
	),
	h: <InstagramCard />,
	i: (
		<div className="__card p-[1px] relative group">
		<div className="rounded-[30.5px] h-full overflow-hidden relative">
		  <Image
		  	src= "/img/hats-reveal.png"
			width={2500}
			height={1299}
			alt="hats-reveal"
			className="absolute inset-0 h-full w-full"
		  />
		  </div>
		</div>
		
	),
	j: (
		<TextCard
		button={{ text: "View FAQ", url: "/faq" }}
		title="Have a question?"
		description="Check out answers to our most common questions, orders specifications and art requirements."
	/>
	),
};

const HomePageGridLayout = () => {
	const { activeTab, rowHeight } = useHomeGridLayout();
	const ff = useRef<any>();

	useEnableGridLayoutTransition({
		wrapperClass: ".home_page_grid_layout",
	});

	const isDraggable = useIsLayoutDraggable();

	return (
		<div style={{ maxWidth: 1201, position: "relative" }} className="mx-auto">
			<ResponsiveGridLayout
				ref={ff}
				className={cx(
					"container !px-0 home_page_grid_layout disable_transition",
					!rowHeight && "opacity-0 pointer-events-none"
				)}
				layouts={activeTab.layout}
				breakpoints={{ lg: 1200, md: 799, xxs: 0 }}
				cols={{ lg: 4, md: 4, xxs: 2 }}
				isBounded
				rowHeight={rowHeight}
				margin={[16, 16]}
				isDraggable={isDraggable}
				draggableCancel=".no-drag"
			>
				{["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"].map((item) => (
					<div
						key={item}
						className={cx(
							"relative",
							activeTab.activeCards?.length > 0 &&
								!activeTab.activeCards?.includes(item) &&
								"opacity-25 pointer-events-none"
						)}
					>
						{/* <div className="absolute z-50 p-2 bg-red-500 top-4 left-4">
              {item}
            </div> */}
						{cards[item as never]}
					</div>
				))}
			</ResponsiveGridLayout>
		</div>
	);
};

export default HomePageGridLayout;
