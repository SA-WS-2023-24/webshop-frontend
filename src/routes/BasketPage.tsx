import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../context/SessionContext";
import { Box, Grid, Typography, styled } from "@mui/material";
import BasketItem from "../components/basket/BasketItem";
import { Button, buttonClasses } from "@mui/base";
import theme from "../theme";
import { getBasketItemsRequest, getBasketRequest, postRemoveProductFromBasketRequest } from "../helper/requests";
import { VerticalBorderDivider } from "../components/main/Divider";

const BuyButton = styled(Button)`
	background-color: ${theme.palette.primary.main};
	border: 8px solid black;
	border-radius: 0px;
	box-shadow: 8px 8px 0px black;
	width: 200px;
	height: 100px;

	&:hover {
		cursor: pointer;
	}

	&.${buttonClasses.active} {
		transform: translate(8px, 8px);
		box-shadow: 0px 0px 0px;
	}

	&.${buttonClasses.disabled} {
		color: inherit;
		background-color: ${theme.palette.grey[400]};
	}
`;

export interface Basket {
	basketId: string
	totalCost: number
	freeShippingLimit: number
}

export interface BasketItem {
	productId: string
	name: string
	imgLink: string
	description: string
	price: number
	quantity: number
}


export default function BasketPage() {
	const session = useContext(SessionContext);
	const [totalCost, setTotalCost] = useState<number>(0);
	const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

	useEffect(() => {
		updateBasket()
	}, [])

	async function updateBasket() {
		const basketResponse = await getBasketRequest(session.getSessionId())
		if (basketResponse.error === null && basketResponse.data !== null) {
			console.log(basketResponse.data)
			setTotalCost(basketResponse.data.totalCost)
			const itemsResponse = await getBasketItemsRequest(session.getSessionId())
			if (itemsResponse.error === null && itemsResponse.data !== null) {
				console.log(itemsResponse.data)
				setBasketItems(itemsResponse.data)
			}
		}
	}

	async function onDelete(basketId: string, productId: string) {
		await postRemoveProductFromBasketRequest(basketId, productId)
		await updateBasket()
	}
	
	function onUpdate(basketId: string, productId: string) {
		postRemoveProductFromBasketRequest(basketId, productId)
	}
	


	return (
		<Grid container>
			<Grid
				item
				width={468}
				display="flex"
				flexDirection="column"
			>
				<Box
					display="flex"
					mt="auto"
					height={150}
					bgcolor="primary.main"
					borderTop="8px solid black"
					justifyContent="center"
					alignItems="center"
				>
					<Typography variant="h3" fontWeight={800}>
						{totalCost.toFixed(2)} EUR
					</Typography>
				</Box>
			</Grid>
			<VerticalBorderDivider />
			<Grid item flexGrow={1}>
				{basketItems.map((basketItem, index) => (
					<BasketItem
						key={index}
						productId={basketItem.productId}
						name={basketItem.name}
						imgLink={basketItem.imgLink}
						description={basketItem.description}
						price={basketItem.price}
						quantity={basketItem.quantity}
						onDelete={onDelete}
						onUpdate={onUpdate}
					/>
				))}

			</Grid>
			<VerticalBorderDivider />
			<Grid
				item
				width={468}
				display="flex"
				flexDirection="column"
			>
				<div
					style={{
						display: "flex",
						marginTop: "auto",
						justifyContent: "center",
						marginBottom: "30px"
					}}
				>
					<BuyButton disabled={basketItems.length === 0}>
						<Typography variant="h3" fontWeight={800}>
							BUY
						</Typography>
					</BuyButton>
				</div>
			</Grid>
		</Grid>
	);
}