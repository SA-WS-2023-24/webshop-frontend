import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/products/ProductCard";
import FilterList from "../components/products/FilterList";
import { VerticalBorderDivider } from "../components/main/Divider";
import { useContext, useEffect } from "react";
import { SessionContext } from "../context/SessionContext";

export interface Product {
	id: string;
	name: string;
	price: number;
	description: string;
	category: string;
	imageLink: string;
	rating: number;
}

export default function ProductsPage() {
	const session = useContext(SessionContext)

	useEffect(() => {
		if (session.lastFilter === "") {
			session.getProducts()
		} else {
			session.getProductsFromCategory(session.lastFilter)
		}
		
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
				<FilterList/>
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
