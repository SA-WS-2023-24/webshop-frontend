import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/products/ProductCard";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import FilterList from "../components/products/FilterList";
import Devider from "../components/main/Divider";
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

async function requestAllProducts() {
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

async function requestProductsFromCategory(category: string) {
	const response = await fetch(`http://192.168.49.2:30001/v1/products/filter?category=${category}`)
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

export const loader = async ({ params }: LoaderFunctionArgs) => {
	console.log(params.category)
	if(params.category === undefined) {
		return requestAllProducts();
	} else {
		return requestProductsFromCategory(params.category)
	}
}

export default function ProductsPage() {
	const products = useLoaderData() as Product[];

	return (
		<div style={{
			display: "flex",
		}}>
			<div style={{
				width: "280px",
				textAlign: "center",
				marginTop: "10px"
			}}
			>
				<Typography 
					width={280}
					fontWeight={800}
					variant="h4"
				>FILTER</Typography>
				<FilterList />
			</div>

			<Devider />

			<Box>
				<Grid container>
					{products.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</Grid>
			</Box>
		</div>

	);
}
