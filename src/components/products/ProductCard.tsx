import {
	Button,
	Card,
	CardContent,
	Grid,
	Link,
	Rating,
	Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Product } from "../../routes/ProductsPage";

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	console.log(product);
	return (
		<Grid item xs={3}>
			<Card>
				<div style={{ position: "relative" }}>
					<img
						src={product.imageLink}
						alt={product.name}
						style={{ width: "75%", height: "75%", objectFit: "cover" }}
					/>
				</div>
				<CardContent>
					<Link component={RouterLink} to={`${product.id}`}>
						<Typography variant="h5" gutterBottom>
							{product.name}
						</Typography>
					</Link>
					<Rating value={product.rating} readOnly precision={0.1} />
					<Typography variant="h5" color="inherit">
						{`${product.price.toFixed(2)} EUR`}
					</Typography>
					<Button variant="outlined" color="primary">
						Add to Basket
					</Button>
				</CardContent>
			</Card>
		</Grid>
	);
}
