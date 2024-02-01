import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/products/ProductCard";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import FilterList from "../components/products/FilterList";
import { VerticalBorderDivider } from "../components/main/Divider";
import { useContext, useEffect } from "react";
import { SessionContext } from "../context/SessionContext";
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
	return category;
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
	if(params.category === undefined) {
		return requestAllProducts();
	} else {
		return requestProductsFromCategory(params.category)
	}
}

export default function ProductsPage() {
	const session = useContext(SessionContext)
	const {category} = useLoaderData() as {category: string}

	useEffect(() => {
		session.getProducts()
	}, [])

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
					{session.products.map((product, index) => (
						<ProductCard 
							key={product.id}
							product={product}
							drawRightBorder={((index + 1) % 4) !== 0}
							drawBottomBorder={
								session.products.length < 8 ||
								index + 1 <= session.products.length - 
									((session.products.length % 4) === 0 ? 4 : (session.products.length % 4))
							}
						/>
					))}
				</Grid>
			</Box>
		</div>

	);
}
