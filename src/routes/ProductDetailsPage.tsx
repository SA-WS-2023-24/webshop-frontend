import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Product } from "./ProductsPage";
import { Box, Button, Typography } from "@mui/material";
import { SessionContext } from "../context/SessionContext";
import { useContext } from "react";
import { HorizontalBorderDivider } from "../components/main/Divider";
import ProductDetailTabs from "../components/product_details/ProductTabs";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const response = await fetch(`http://192.168.49.2:30001/v1/product/${params.productId}`)
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

export default function ProductDetailsPage() {
    const session = useContext(SessionContext)
    const product = useLoaderData() as Product;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
            }}
        >
            <div style={{
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                justifyContent: 'center',
                paddingTop: '100px',
                paddingBottom: '100px',
                height: "500px"
            }}>
                <img
                    src={product.imageLink}
                    style={{
                        border: '8px solid',
                        borderColor: 'black',
                        padding: '20px'
                    }}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Typography variant="h4">{product.name}</Typography>
                    <Typography variant="h4">{product.price.toFixed(2)} EUR</Typography>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Button variant="contained"><Typography variant="h4">FAVS</Typography></Button>
                    <Button variant="contained"><Typography variant="h4">CONFIGURE</Typography></Button>
                    <Button
                        variant="contained"
                        onClick={() => session.addToBasket(product.id)}
                    ><Typography variant="h4">BASKET</Typography></Button>
                </div>
            </div>

            <HorizontalBorderDivider />

            <Box
                sx={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    marginBottom: "20px"
                }}
            >
                <Box
                    sx={{
                        width: 800,
                        height: 1
                    }}
                >
                    <ProductDetailTabs />
                </Box>
            </Box>
        </div>
    );
}