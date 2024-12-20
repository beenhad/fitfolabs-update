/* eslint-disable @next/next/no-img-element */
import useEnableGridLayoutTransition from "@/hooks/useEnableGridLayoutTransition";
import useIsLayoutDraggable from "@/hooks/useIsLayoutDraggable";
import { cx } from "@/utils";
import PageSectionCard from "@/views/Home/components/PageSectionCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useWindowSize } from "react-use";

const ResponsiveGridLayout = WidthProvider(Responsive);

const cards = {
	a: (
		<div className="rounded-[30.5px] h-full overflow-hidden relative">
			<Image
				src="/img/cs-w.png"
				className="group-hover:opacity-0 absolute inset-0 h-full w-full object-cover"
				alt="hats"
				width={2500}
				height={1299}
			/>
		</div>
	),
	b: (
		<div className="rounded-[30.5px] h-full overflow-hidden relative">
			<Image
				src="/img/cs-s-1.png"
				className="group-hover:opacity-0 absolute inset-0 h-full w-full object-cover"
				alt="hats"
				width={2500}
				height={1299}
			/>
		</div>
	),
	c: (
		<div className="rounded-[30.5px] h-full overflow-hidden relative">
			<Image
				src="/img/cs-s-2.png"
				className="group-hover:opacity-0 absolute inset-0 h-full w-full object-cover"
				alt="hats"
				width={2500}
				height={1299}
			/>
		</div>
	),
	d: (
		<div className="rounded-[30.5px] h-full overflow-hidden relative">
			<Image
				src="/img/cs-s-3.png"
				className="group-hover:opacity-0 absolute inset-0 h-full w-full object-cover"
				alt="hats"
				width={2500}
				height={1299}
			/>
		</div>
	),
	e: (
		<PageSectionCard
		img={{
			src: "/img/cs-s-4.png",
			width: 1215,
			height: 2500,
			alt: "hoodie",
		}}
		hoverImg={{
			src: "/img/blank.png",
			width: 1215,
			height: 2500,
			alt: "hoodie",
		}}
		link={{
			text: "Get Started",
			url: "/get-a-quote",
		}} />
	),
	f: (
		<div className="rounded-[30.5px] h-full overflow-hidden relative">
			<Image
				src="/img/cs-t-1.png"
				className="group-hover:opacity-0 absolute inset-0 h-full w-full object-cover"
				alt="hats"
				width={2500}
				height={1299}
			/>
		</div>
	),
	g: (
		<div className="rounded-[30.5px] h-full overflow-hidden relative">
			<Image
				src="/img/cs-t-2.png"
				className="group-hover:opacity-0 absolute inset-0 h-full w-full object-cover"
				alt="hats"
				width={2500}
				height={1299}
			/>
		</div>
	),
	h: (
		<div className="rounded-[30.5px] h-full overflow-hidden relative">
			<Image
				src="/img/cs-s-5.png"
				className="group-hover:opacity-0 absolute inset-0 h-full w-full object-cover"
				alt="hats"
				width={2500}
				height={1299}
			/>
		</div>
	),
	i: (
		<div className="rounded-[30.5px] h-full overflow-hidden relative">
			<Image
				src="/img/cs-s-6.png"
				className="group-hover:opacity-0 absolute inset-0 h-full w-full object-cover"
				alt="hats"
				width={2500}
				height={1299}
			/>
		</div>
	),
};

const layout = {
	md: [
		{ i: "a", x: 0, y: 0, w: 2, h: 1 },
		{ i: "b", x: 2, y: 0, w: 1, h: 1 },
		{ i: "c", x: 3, y: 0, w: 1, h: 1 },
		{ i: "d", x: 0, y: 1, w: 1, h: 1 },
		{ i: "e", x: 1, y: 1, w: 1, h: 1 },
		{ i: "f", x: 2, y: 1, w: 1, h: 2 },
		{ i: "g", x: 3, y: 1, w: 1, h: 2 },
		{ i: "h", x: 0, y: 2, w: 1, h: 1 },
		{ i: "i", x: 1, y: 2, w: 1, h: 1 },
	],
	xxs: [
		{ i: "a", x: 0, y: 0, w: 2, h: 1 },
		{ i: "b", x: 0, y: 1, w: 1, h: 1 },
		{ i: "c", x: 1, y: 1, w: 1, h: 1 },
		{ i: "d", x: 0, y: 2, w: 1, h: 1 },
		{ i: "e", x: 1, y: 2, w: 1, h: 1 },
		{ i: "f", x: 0, y: 4, w: 1, h: 2 },
		{ i: "g", x: 1, y: 4, w: 1, h: 2 },
		{ i: "h", x: 0, y: 3, w: 1, h: 1 },
		{ i: "i", x: 1, y: 3, w: 1, h: 1 },
	],
};

const ProjectGridLayout = () => {
	const { width } = useWindowSize();
	const isDraggable = useIsLayoutDraggable();

	const [rowHeight, setRowHeight] = useState<number>(0);

	useEffect(() => {
		const d = document.querySelector(".project_page_grid_layout");

		if (!d) return;

		const cols = width > 800 ? 4 : 2;
		setRowHeight((d.clientWidth - (cols + 1) * 16) / cols);
	}, [width]);

	useEnableGridLayoutTransition({
		wrapperClass: ".project_page_grid_layout",
	});

	return (
		<div>
			<ResponsiveGridLayout
				className={cx(
					"container px-0 project_page_grid_layout disable_transition",
					!rowHeight && "opacity-0 pointer-events-none"
				)}
				isDraggable={isDraggable}
				layouts={layout}
				breakpoints={{ md: 799, xxs: 0 }}
				cols={{ md: 4, xxs: 2 }}
				isBounded
				rowHeight={rowHeight}
				margin={[16, 16]}
				draggableCancel=".no-drag"
			
			>
				{["a", "b", "c", "d", "e", "f", "g", "h", "i"].map((item) => (
					<div key={item} className="__card overflow-hidden p-[1px]">
						{/* <div className="absolute z-50 p-2 bg-red-500 top-4 left-4">
              {item}
            </div> */}
						{/* <div className="overflow-hidden rounded-[30px] h-full w-full"> */}
						{cards[item as never]}
						{/* </div> */}
					</div>
				))}
			</ResponsiveGridLayout>
		</div>
	);
};

export default ProjectGridLayout;