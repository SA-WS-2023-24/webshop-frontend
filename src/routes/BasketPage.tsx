import { forwardRef, useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import { Box, Grid, Typography, styled } from "@mui/material";
import BasketItem from "../components/basket/BasketItem";
import { Button, ButtonProps, useButton } from "@mui/base";
import theme from "../theme";
import { VerticalBorderDivider } from "../components/main/Divider";
import clsx from 'clsx';

const StyledButton = styled(Button)`
	background-color: ${theme.palette.primary.main};
	border: 8px solid black;
	border-radius: 0px;
	box-shadow: 8px 8px 0px black;
	width: 200px;
	height: 100px;

	&:hover {
		cursor: pointer;
        box-shadow: 10px 10px 0px black;
        transform: translate(-2px, -2px);
        background-color: ${theme.palette.primary.dark};
	}

	&.active {
		transform: translate(8px, 8px);
		box-shadow: 0px 0px 0px;
	}

	&.disabled {
		color: inherit;
		background-color: ${theme.palette.grey[400]};
		cursor: default;
		box-shadow: 8px 8px 0px black;
        transform: translate(0px, 0px);
	}
`;

const BuyButton = forwardRef(function CustomButton(
    props: ButtonProps,
    ref: React.ForwardedRef<any>,
  ) {
    const { disabled, children } = props;
    const { active, getRootProps } = useButton({
      ...props,
      rootRef: ref,
    });
  
    return (
      <StyledButton
        {...getRootProps()}
		className={clsx({
			active,
			disabled
		})
		}
      >
        {children}
      </StyledButton>
    );
  });

export interface Basket {
	basketId: string
	totalCost: number
	freeShippingLimit: number
	items: BasketItem[]
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
						{session.basket.totalCost.toFixed(2)} EUR
					</Typography>
				</Box>
			</Grid>
			<VerticalBorderDivider />
			<Grid item flexGrow={1}>
				{session.basket.items.map((basketItem, index) => (
					<BasketItem
						key={index}
						productId={basketItem.productId}
						name={basketItem.name}
						imgLink={basketItem.imgLink}
						description={basketItem.description}
						price={basketItem.price}
						quantity={basketItem.quantity}
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
					<BuyButton 
						disabled={session.basket.items.length === 0}
						onClick={() => console.log("Checkout needs to be called here")}
					>
						<Typography variant="h3" fontWeight={800}>
							BUY
						</Typography>
					</BuyButton>
				</div>
			</Grid>
		</Grid>
	);
}