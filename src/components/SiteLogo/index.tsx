import Image from "next/image";
import Link from "next/link";

const SiteLogo = () => {
	return (
		<Link href={"/"}>
			{/* <svg
				width="137"
				height="24"
				viewBox="0 0 137 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_486_8205)">
					<g clipPath="url(#clip1_486_8205)">
						<g clipPath="url(#clip2_486_8205)">
							<path
								d="M33.9102 18.3996H37.1102V13.3996H42.7102V10.7996H37.1102V8.19961H43.1102V5.59961H33.9102V18.3996Z"
								fill="#F0F2F8"
							/>
							<path
								d="M47.8094 5.59961H44.6094V18.4996H47.8094V5.59961Z"
								fill="#F0F2F8"
							/>
							<path
								d="M49.1094 8.19961H52.9094V18.4996H56.1094V8.19961H59.9094V5.59961H49.1094V8.19961Z"
								fill="#F0F2F8"
							/>
							<path
								d="M61.3105 18.3996H64.5105V13.3996H70.1105V10.7996H64.5105V8.19961H70.5105V5.59961H61.3105V18.3996Z"
								fill="#F0F2F8"
							/>
							<path
								d="M81.2102 6.0998C80.2102 5.5998 79.1102 5.2998 77.8102 5.2998C76.5102 5.2998 75.4102 5.5998 74.4102 6.0998C73.4102 6.5998 72.7102 7.3998 72.2102 8.3998C71.7102 9.3998 71.4102 10.5998 71.4102 11.9998C71.4102 13.3998 71.7102 14.5998 72.2102 15.5998C72.7102 16.5998 73.4102 17.3998 74.4102 17.8998C75.4102 18.3998 76.5102 18.6998 77.8102 18.6998C79.1102 18.6998 80.2102 18.3998 81.2102 17.8998C82.2102 17.3998 82.9102 16.5998 83.4102 15.5998C83.9102 14.5998 84.2102 13.3998 84.2102 11.9998C84.2102 10.5998 83.9102 9.3998 83.4102 8.3998C82.9102 7.3998 82.1102 6.5998 81.2102 6.0998ZM80.5102 14.1998C80.3102 14.7998 79.9102 15.2998 79.5102 15.5998C79.0102 15.8998 78.5102 16.0998 77.8102 16.0998C77.1102 16.0998 76.6102 15.8998 76.1102 15.5998C75.6102 15.2998 75.3102 14.7998 75.0102 14.1998C74.8102 13.5998 74.6102 12.8998 74.6102 11.9998C74.6102 11.0998 74.7102 10.3998 75.0102 9.7998C75.2102 9.1998 75.6102 8.6998 76.1102 8.3998C76.6102 8.0998 77.1102 7.8998 77.8102 7.8998C78.5102 7.8998 79.0102 8.0998 79.5102 8.3998C80.0102 8.6998 80.3102 9.1998 80.5102 9.7998C80.7102 10.3998 80.8102 11.1998 80.8102 11.9998C80.8102 12.7998 80.7102 13.5998 80.5102 14.1998Z"
								fill="#F0F2F8"
							/>
							<path
								d="M92.5105 5.59961H89.3105V18.4996H98.3105V15.8996H92.5105V5.59961Z"
								fill="#F0F2F8"
							/>
							<path
								d="M103.911 5.59961L99.3105 18.4996H102.511L103.311 16.0996H108.111L108.911 18.4996H112.111L107.411 5.59961H103.911ZM104.111 13.4996L105.611 8.99961L107.111 13.4996H104.111Z"
								fill="#F0F2F8"
							/>
							<path
								d="M120.51 11.7996C121.11 11.6996 121.61 11.5996 122.01 11.3996C122.41 11.1996 122.71 10.8996 122.91 10.4996C123.11 10.0996 123.21 9.69961 123.21 9.19961C123.21 7.99961 122.71 7.09961 121.81 6.49961C120.91 5.89961 119.51 5.59961 117.71 5.59961H112.91V18.4996H118.41C120.21 18.4996 121.51 18.1996 122.41 17.5996C123.31 16.9996 123.71 16.0996 123.71 14.8996C123.71 13.9996 123.41 13.2996 122.91 12.7996C122.41 12.1996 121.61 11.8996 120.51 11.7996ZM116.21 8.09961H118.11C118.71 8.09961 119.21 8.19961 119.51 8.39961C119.91 8.59961 120.01 8.99961 120.01 9.39961C120.01 9.79961 119.81 10.1996 119.51 10.3996C119.21 10.5996 118.71 10.6996 118.11 10.6996H116.21V8.09961ZM120.11 15.5996C119.71 15.7996 119.21 15.9996 118.61 15.9996H116.21V12.9996H118.61C119.21 12.9996 119.71 13.0996 120.11 13.3996C120.51 13.5996 120.61 13.9996 120.61 14.4996C120.61 14.9996 120.41 15.2996 120.11 15.5996Z"
								fill="#F0F2F8"
							/>
							<path
								d="M134.51 12.2996C133.71 11.5996 132.51 11.1996 130.91 10.7996L130.71 10.6996C130.21 10.5996 129.81 10.4996 129.51 10.2996C129.21 10.1996 129.01 9.99961 128.81 9.79961C128.61 9.59961 128.51 9.39961 128.51 9.09961C128.51 8.69961 128.61 8.39961 129.01 8.09961C129.31 7.79961 129.81 7.69961 130.31 7.69961C130.71 7.69961 131.11 7.79961 131.41 7.89961C131.71 8.09961 132.01 8.29961 132.21 8.59961C132.41 8.89961 132.51 9.29961 132.51 9.69961L135.71 9.59961C135.61 8.69961 135.31 7.89961 134.81 7.29961C134.31 6.59961 133.71 6.09961 133.01 5.69961C132.31 5.29961 131.41 5.09961 130.41 5.09961C129.41 5.09961 128.51 5.29961 127.71 5.59961C126.91 5.89961 126.31 6.39961 125.91 6.99961C125.51 7.59961 125.31 8.29961 125.31 9.09961C125.31 10.0996 125.71 10.8996 126.51 11.5996C127.31 12.1996 128.51 12.6996 130.11 13.0996C131.01 13.2996 131.71 13.5996 132.01 13.7996C132.41 14.0996 132.61 14.3996 132.61 14.7996C132.61 15.0996 132.51 15.2996 132.41 15.4996C132.31 15.6996 132.01 15.7996 131.81 15.8996C131.51 15.9996 131.21 15.9996 130.81 15.9996C130.31 15.9996 129.91 15.8996 129.51 15.7996C129.11 15.5996 128.81 15.3996 128.61 15.0996C128.41 14.7996 128.21 14.3996 128.21 13.9996L125.01 14.1996C125.11 15.0996 125.31 15.8996 125.81 16.5996C126.31 17.2996 127.01 17.7996 127.81 18.1996C128.61 18.5996 129.61 18.6996 130.71 18.6996C131.71 18.6996 132.61 18.4996 133.31 18.1996C134.11 17.8996 134.71 17.3996 135.11 16.7996C135.51 16.1996 135.81 15.4996 135.81 14.6996C135.71 13.6996 135.31 12.8996 134.51 12.2996Z"
								fill="#F0F2F8"
							/>
							<path
								d="M33.9102 18.3996H37.1102V13.3996H42.7102V10.7996H37.1102V8.19961H43.1102V5.59961H33.9102V18.3996Z"
								fill="#F0F2F8"
							/>
							<path
								d="M47.8094 5.59961H44.6094V18.4996H47.8094V5.59961Z"
								fill="#F0F2F8"
							/>
							<path
								d="M49.1094 8.19961H52.9094V18.4996H56.1094V8.19961H59.9094V5.59961H49.1094V8.19961Z"
								fill="#F0F2F8"
							/>
							<path
								d="M61.3105 18.3996H64.5105V13.3996H70.1105V10.7996H64.5105V8.19961H70.5105V5.59961H61.3105V18.3996Z"
								fill="#F0F2F8"
							/>
							<path
								d="M81.2102 6.0998C80.2102 5.5998 79.1102 5.2998 77.8102 5.2998C76.5102 5.2998 75.4102 5.5998 74.4102 6.0998C73.4102 6.5998 72.7102 7.3998 72.2102 8.3998C71.7102 9.3998 71.4102 10.5998 71.4102 11.9998C71.4102 13.3998 71.7102 14.5998 72.2102 15.5998C72.7102 16.5998 73.4102 17.3998 74.4102 17.8998C75.4102 18.3998 76.5102 18.6998 77.8102 18.6998C79.1102 18.6998 80.2102 18.3998 81.2102 17.8998C82.2102 17.3998 82.9102 16.5998 83.4102 15.5998C83.9102 14.5998 84.2102 13.3998 84.2102 11.9998C84.2102 10.5998 83.9102 9.3998 83.4102 8.3998C82.9102 7.3998 82.1102 6.5998 81.2102 6.0998ZM80.5102 14.1998C80.3102 14.7998 79.9102 15.2998 79.5102 15.5998C79.0102 15.8998 78.5102 16.0998 77.8102 16.0998C77.1102 16.0998 76.6102 15.8998 76.1102 15.5998C75.6102 15.2998 75.3102 14.7998 75.0102 14.1998C74.8102 13.5998 74.6102 12.8998 74.6102 11.9998C74.6102 11.0998 74.7102 10.3998 75.0102 9.7998C75.2102 9.1998 75.6102 8.6998 76.1102 8.3998C76.6102 8.0998 77.1102 7.8998 77.8102 7.8998C78.5102 7.8998 79.0102 8.0998 79.5102 8.3998C80.0102 8.6998 80.3102 9.1998 80.5102 9.7998C80.7102 10.3998 80.8102 11.1998 80.8102 11.9998C80.8102 12.7998 80.7102 13.5998 80.5102 14.1998Z"
								fill="#F0F2F8"
							/>
							<path
								d="M92.5105 5.59961H89.3105V18.4996H98.3105V15.8996H92.5105V5.59961Z"
								fill="#F0F2F8"
							/>
							<path
								d="M103.911 5.59961L99.3105 18.4996H102.511L103.311 16.0996H108.111L108.911 18.4996H112.111L107.411 5.59961H103.911ZM104.111 13.4996L105.611 8.99961L107.111 13.4996H104.111Z"
								fill="#F0F2F8"
							/>
							<path
								d="M120.51 11.7996C121.11 11.6996 121.61 11.5996 122.01 11.3996C122.41 11.1996 122.71 10.8996 122.91 10.4996C123.11 10.0996 123.21 9.69961 123.21 9.19961C123.21 7.99961 122.71 7.09961 121.81 6.49961C120.91 5.89961 119.51 5.59961 117.71 5.59961H112.91V18.4996H118.41C120.21 18.4996 121.51 18.1996 122.41 17.5996C123.31 16.9996 123.71 16.0996 123.71 14.8996C123.71 13.9996 123.41 13.2996 122.91 12.7996C122.41 12.1996 121.61 11.8996 120.51 11.7996ZM116.21 8.09961H118.11C118.71 8.09961 119.21 8.19961 119.51 8.39961C119.91 8.59961 120.01 8.99961 120.01 9.39961C120.01 9.79961 119.81 10.1996 119.51 10.3996C119.21 10.5996 118.71 10.6996 118.11 10.6996H116.21V8.09961ZM120.11 15.5996C119.71 15.7996 119.21 15.9996 118.61 15.9996H116.21V12.9996H118.61C119.21 12.9996 119.71 13.0996 120.11 13.3996C120.51 13.5996 120.61 13.9996 120.61 14.4996C120.61 14.9996 120.41 15.2996 120.11 15.5996Z"
								fill="#F0F2F8"
							/>
							<path
								d="M134.51 12.2996C133.71 11.5996 132.51 11.1996 130.91 10.7996L130.71 10.6996C130.21 10.5996 129.81 10.4996 129.51 10.2996C129.21 10.1996 129.01 9.99961 128.81 9.79961C128.61 9.59961 128.51 9.39961 128.51 9.09961C128.51 8.69961 128.61 8.39961 129.01 8.09961C129.31 7.79961 129.81 7.69961 130.31 7.69961C130.71 7.69961 131.11 7.79961 131.41 7.89961C131.71 8.09961 132.01 8.29961 132.21 8.59961C132.41 8.89961 132.51 9.29961 132.51 9.69961L135.71 9.59961C135.61 8.69961 135.31 7.89961 134.81 7.29961C134.31 6.59961 133.71 6.09961 133.01 5.69961C132.31 5.29961 131.41 5.09961 130.41 5.09961C129.41 5.09961 128.51 5.29961 127.71 5.59961C126.91 5.89961 126.31 6.39961 125.91 6.99961C125.51 7.59961 125.31 8.29961 125.31 9.09961C125.31 10.0996 125.71 10.8996 126.51 11.5996C127.31 12.1996 128.51 12.6996 130.11 13.0996C131.01 13.2996 131.71 13.5996 132.01 13.7996C132.41 14.0996 132.61 14.3996 132.61 14.7996C132.61 15.0996 132.51 15.2996 132.41 15.4996C132.31 15.6996 132.01 15.7996 131.81 15.8996C131.51 15.9996 131.21 15.9996 130.81 15.9996C130.31 15.9996 129.91 15.8996 129.51 15.7996C129.11 15.5996 128.81 15.3996 128.61 15.0996C128.41 14.7996 128.21 14.3996 128.21 13.9996L125.01 14.1996C125.11 15.0996 125.31 15.8996 125.81 16.5996C126.31 17.2996 127.01 17.7996 127.81 18.1996C128.61 18.5996 129.61 18.6996 130.71 18.6996C131.71 18.6996 132.61 18.4996 133.31 18.1996C134.11 17.8996 134.71 17.3996 135.11 16.7996C135.51 16.1996 135.81 15.4996 135.81 14.6996C135.71 13.6996 135.31 12.8996 134.51 12.2996Z"
								fill="#F0F2F8"
							/>
							<path
								d="M22.1098 5.60039C22.2098 5.60039 22.2098 5.60039 22.2098 5.60039C22.2098 5.60039 22.2098 5.60039 22.2098 5.70039H22.3098C22.3098 5.70039 22.3098 5.70039 22.3098 5.60039C22.3098 5.60039 22.3098 5.60039 22.2098 5.60039C22.2098 5.60039 22.2098 5.60039 22.3098 5.60039C22.3098 5.60039 22.3098 5.60039 22.3098 5.50039C22.3098 5.50039 22.3098 5.40039 22.2098 5.40039H22.1098H22.0098V5.80039H22.1098V5.60039ZM22.1098 5.50039C22.2098 5.50039 22.2098 5.50039 22.2098 5.50039C22.2098 5.50039 22.2098 5.50039 22.2098 5.60039C22.2098 5.60039 22.2098 5.60039 22.2098 5.70039C22.2098 5.70039 22.2098 5.70039 22.1098 5.70039H22.0098V5.50039H22.1098Z"
								fill="#F0F2F8"
							/>
							<path
								d="M22.2102 5.8998C22.3102 5.8998 22.4102 5.8998 22.4102 5.7998C22.5102 5.6998 22.5102 5.6998 22.5102 5.5998C22.5102 5.4998 22.5102 5.3998 22.4102 5.3998C22.3102 5.2998 22.3102 5.2998 22.2102 5.2998C22.1102 5.2998 22.0102 5.2998 22.0102 5.3998C21.9102 5.4998 21.9102 5.4998 21.9102 5.5998C21.9102 5.6998 21.9102 5.7998 22.0102 5.7998C22.0102 5.8998 22.1102 5.8998 22.2102 5.8998ZM22.0102 5.3998C22.1102 5.2998 22.1102 5.2998 22.2102 5.2998C22.3102 5.2998 22.3102 5.2998 22.4102 5.3998C22.5102 5.4998 22.5102 5.4998 22.5102 5.5998C22.5102 5.6998 22.5102 5.6998 22.4102 5.7998C22.3102 5.8998 22.3102 5.8998 22.2102 5.8998C22.1102 5.8998 22.1102 5.8998 22.0102 5.7998C21.9102 5.6998 21.9102 5.6998 21.9102 5.5998C21.9102 5.4998 21.9102 5.4998 22.0102 5.3998Z"
								fill="#F0F2F8"
							/>
							<path
								d="M22.8102 5.7998L11.3102 12.0998L6.61016 9.7998L3.91016 11.3998V19.4998L11.8102 23.7998L22.9102 17.7998L22.8102 5.7998Z"
								fill="#F0F2F8"
							/>
							<path
								d="M3.61055 8.0002L7.41055 6.0002L12.4105 8.4002L12.5105 10.8002L15.4105 9.3002L15.3105 7.0002L10.3105 4.5002L12.5105 3.4002L18.3105 6.3002L18.4105 7.7002L21.6105 5.9002V5.2002L12.0105 0.200195L0.810547 6.1002V17.8002L3.61055 19.3002V8.0002Z"
								fill="#F0F2F8"
							/>
						</g>
					</g>
				</g>
				<defs>
					<clipPath id="clip0_486_8205">
						<rect
							width="136"
							height="24"
							fill="white"
							transform="translate(0.189453)"
						/>
					</clipPath>
					<clipPath id="clip1_486_8205">
						<rect width="136" height="24" fill="white" />
					</clipPath>
					<clipPath id="clip2_486_8205">
						<rect
							width="136"
							height="24"
							fill="white"
							transform="translate(-0.189453)"
						/>
					</clipPath>
				</defs>
			</svg> */}
			<Image src="/logo.svg" alt="logo" width="137" height="24" />
		</Link>
	);
};

export default SiteLogo;
