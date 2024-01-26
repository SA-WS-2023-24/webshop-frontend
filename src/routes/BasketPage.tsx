import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

interface Basket {

}

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const response = await fetch(`http://192.168.49.2:30001/v1/basket/${params.basketId}`)
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

export default function BasketPage() {
    const basket = useLoaderData() as Basket;

    return (
        <p>Basket</p>
    );
}