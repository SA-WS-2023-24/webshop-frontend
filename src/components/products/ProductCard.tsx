import {
	Box,
	Card,
	CardContent,
	Grid,
	Link,
	Rating,
	Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Product } from "../../routes/ProductsPage";
import { useContext } from "react";
import { SessionContext } from "../../context/SessionContext";

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const session = useContext(SessionContext);

	return (
		<Grid item xs={3}>
			<Card sx={{
				borderRight: "8px solid black",
				borderBottom: "8px solid black",
				borderRadius: 0,
				height: 450
			}}>
				<div style={{
					margin: "20px",
					position: "relative",
					width: "50%",
					height: "50%",
					backgroundColor: "white",
					border: "4px solid black",
					boxShadow: "8px 8px 0px #FFBC6C"
				}}>
					<img
						src={product.imageLink}
						alt={product.name}
						style={{
							padding: "10px",
							width: "100%",
							height: "100%",
							objectFit: "scale-down"
						}}
					/>
				</div>
				<CardContent>
					<Link component={RouterLink} to={`${product.id}`}>
						<Typography variant="h5" gutterBottom marginBottom={"10px"} noWrap={true}>
							{product.name}
						</Typography>
					</Link>
					<Rating value={product.rating} readOnly precision={0.1} size="large"/>
					<div style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center"
					}}>
						<Typography variant="h5" color="inherit" sx={{ fontWeight: 800 }}>
							{`${product.price.toFixed(2)} EUR`}
						</Typography>
						<Box
							color="primary"
							onClick={() => session.addToBasket(product.id)}
							sx={{
								padding: "2px 8px 2px 8px",
								border: "4px solid black",
								borderRadius: 0,
								backgroundColor: "primary.main",
								color: "black",
								boxShadow: "4px 4px 0px black",
								'&:click': {
									borderColor: "white"
								},
								'&:hover': {
									transform: "translate(2px, 2px)",
									boxShadow: "0px 0px 0px",
									cursor: "pointer"
								}
							}}
						>
							<Typography variant="h5">Basket</Typography>
						</Box>
					</div>
				</CardContent>
			</Card>
		</Grid >
	);
}
