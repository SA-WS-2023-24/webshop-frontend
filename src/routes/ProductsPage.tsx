import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/products/ProductCard";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import FilterList from "../components/products/FilterList";
import { VerticalBorderDivider } from "../components/main/Divider";
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
			return response.json();
		})
		.then((data) => {
			return {products: data, category: ""};
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
			return response.json();
		})
		.then((data) => {
			return {products: data, category: category};
		})
		.catch((error) => {
			console.error("error fetching products: ", error);
		});
	return response;
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
	if(params.category === undefined) {
		return requestAllProducts();
	} else {
		return requestProductsFromCategory(params.category)
	}
}

export default function ProductsPage() {
	const {products, category} = useLoaderData() as {products: Product[], category: string}

	return (
		<div style={{
			display: "flex",
			flexGrow: 1,
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
				<FilterList selectedCategory={category}/>
			</div>

			<VerticalBorderDivider />

			<Box
				sx={{
					display: "flex",
					flexGrow: 1,
					
				}}
			>
				<Grid container>
					{products.map((product, index) => (
						<ProductCard 
							key={product.id}
							product={product}
							drawRightBorder={((index + 1) % 4) !== 0}
							drawBottomBorder={
								products.length < 8 ||
								index + 1 <= products.length - 
									((products.length % 4) === 0 ? 4 : (products.length % 4))
							}
						/>
					))}
				</Grid>
			</Box>
		</div>

	);
}
