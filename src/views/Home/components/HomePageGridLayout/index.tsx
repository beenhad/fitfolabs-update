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

const MapCard = dynamic(() => import("../MapCard"), { ssr: false });

const ResponsiveGridLayout = WidthProvider(Responsive);

const cards = {
	a: (
		<TextCard
			button={{ text: "Book Now", url: "/services" }}
			title="Creative Strategy Marketing"
			description="What we are known for - Our Signature 90 minute creative consultation."
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
				text: "Get Started",
				url: "/get-a-quote",
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
				text: "Screenprinting",
				url: "/t-shirts",
			}}
		/>
	),
	g: (
		<TextCard
			button={{ text: "Get Started", url: "/get-a-quote" }}
			title="Event Space"
			description=""
		/>
	),
	h: <InstagramCard />,
	i: (
		<ProjectCard
			img={{
				src: "/img/hats.png",
				width: 2500,
				height: 1299,
				alt: "hats",
			}}
			hoverImg={{
				src: "/img/hats-reveal.png",
				width: 2500,
				height: 1299,
				alt: "hats-reveal",
			}}
			link={{
				text: "Accessories",
				url: "accessories",
			}}
		/>
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
		<div style={{ maxWidth: 1201 }} className="mx-auto">
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
