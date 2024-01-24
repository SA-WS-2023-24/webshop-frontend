import { Button, Card, CardContent, Grid, Rating, Typography } from "@mui/material";
import { Product } from "../../routes/ProductsPage";

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    console.log(product)
    return (
        <Grid item xs={3}>
            <Card>
                <div style={{ position: 'relative' }}>
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '75%', height: '75%', objectFit: 'cover' }}
                    />
                </div>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
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