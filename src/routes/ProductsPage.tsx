import { Box, Grid } from "@mui/material";
import ProductCard from "../components/products/ProductCard";

export interface Product {
    id: number,
    name: string,
    price: number,
    image: string,
    rating: number
}

const products: Product[] = [
    {
        "id": 1,
        "name": "EVGA GeForce RTX 3080 FTW3 ULTRA GAMING",
        "price": 1300.00,
        "image": "https://m.media-amazon.com/images/I/81sXFTXt5CS.jpg",
        "rating": 4.5
    },
    {
        "id": 2,
        "name": "EVGA GeForce RTX 3080 FTW3 ULTRA GAMING",
        "price": 1300.00,
        "image": "https://m.media-amazon.com/images/I/81sXFTXt5CS.jpg",
        "rating": 4.5
    },
    {
        "id": 2,
        "name": "EVGA GeForce RTX 3080 FTW3 ULTRA GAMING",
        "price": 1300.00,
        "image": "https://m.media-amazon.com/images/I/81sXFTXt5CS.jpg",
        "rating": 4.5
    },
    {
        "id": 3,
        "name": "EVGA GeForce RTX 3070 FTW3 ULTRA GAMING",
        "price": 650.00,
        "image": "https://m.media-amazon.com/images/I/81cgUKnQK2L.jpg",
        "rating": 4.0
    },
    {
        "id": 3,
        "name": "EVGA GeForce RTX 3070 FTW3 ULTRA GAMING",
        "price": 650.00,
        "image": "https://m.media-amazon.com/images/I/81cgUKnQK2L.jpg",
        "rating": 4.0
    },
    {
        "id": 3,
        "name": "EVGA GeForce RTX 3070 FTW3 ULTRA GAMING",
        "price": 650.00,
        "image": "https://m.media-amazon.com/images/I/81cgUKnQK2L.jpg",
        "rating": 4.0
    },
    {
        "id": 4,
        "name": "EVGA GeForce RTX 3070 FTW3 ULTRA GAMING",
        "price": 650.00,
        "image": "https://m.media-amazon.com/images/I/81cgUKnQK2L.jpg",
        "rating": 4.0
    }
]

export default function ProductsPage() {
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