import React from "react";
import { Filter } from "./filter";
import { Product } from "./product";
import { Pagination } from "./pagination";

export const Catalog = () => {
	const product = [
		{
			img: "images/product-1.jpg",
			status: "30%",
			name: "Bell Pepper",
			priceOld: "$120.00",
			priceNew: "$80.00"
		},
		{
			img: "images/product-2.jpg",
			status: null,
			name: "Strawberry",
			priceOld: "$120.00",
			priceNew: null
		}
	];
	return (
		<section className="ftco-section">
			<div className="container">
				<Filter />
				<Product product={product}/>
				<Pagination />
			</div>
		</section>
	)
};