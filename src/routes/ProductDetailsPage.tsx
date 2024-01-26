import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Product } from "./ProductsPage";
import ProductCard from "../components/products/ProductCard";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    console.log(params.productId)
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
    const product = useLoaderData() as Product;
    return (
        <ProductCard product={product} />
    );
}