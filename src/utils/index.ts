import classNames from "classnames";

export const cx = classNames;

export const getAbsoluteUrl = (path: string) => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
	return `${baseUrl}${path}`;
};
