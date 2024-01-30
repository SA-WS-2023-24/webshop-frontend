import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Product } from "./ProductsPage";
import { Button, Typography } from "@mui/material";
import { SessionContext } from "../context/SessionContext";
import { useContext } from "react";

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
        <div style={{
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent: 'center',
            borderBottom: '8px solid',
            borderColor: 'black',
            paddingTop: '100px',
            paddingBottom: '100px'
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
                    onClick={() =>  {}}
                ><Typography variant="h4">BASKET</Typography></Button>
            </div>
        </div>
    );
}