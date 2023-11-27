import React from "react";
import Header from "./Header/Index";
import Slider from "./Slider/Index";

const PrivateLayout = ({ children, ...props }) => {
	return (
		<div>
			<Header />
			<Slider />
			{children}
		</div>
	);
};

export default PrivateLayout;
