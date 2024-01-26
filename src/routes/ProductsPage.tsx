import { Box, Grid } from "@mui/material";
import ProductCard from "../components/products/ProductCard";
import { json, useLoaderData } from "react-router";
import { redirect } from "react-router-dom";
//import { useEffect, useState } from "react";

export interface Product {
	id: string;
	name: string;
	price: number;
	description: string;
	category: string;
	imageLink: string;
	rating: number;
}

export const loader = async () => {
	const response = await fetch("http://192.168.49.2:30001/v1/products")
		.then((response) => {
			if (!response.ok) {
				console.error("error occured!");
			}
			console.log(response);
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error("error fetching products: ", error);
		});
	return response;
}

export default function ProductsPage() {
	const products = useLoaderData() as Product[];

	return (
		<Box sx={{ ml: "300px" }}>
			<Grid container>
				{products.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</Grid>
		</Box>
	);
}
