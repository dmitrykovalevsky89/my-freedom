import React from "react";
import { Infoline } from "./infoline";
import { Nav } from "./nav";
import { Slider } from "./slider";
import { Catalog } from "./catalog";
import { Subscribe } from "./subscribe";
import { Footer } from "./footer";
import { Loader } from "./loader";

export const Shop = () => {
	return (
		<div>
			<Infoline />

			<Nav />

			<Slider />

			<Catalog />

			<Subscribe />

			<Footer />

			<Loader />
		</div>
	)
};