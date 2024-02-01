import { Card, CardContent, Grid, Link, Typography, styled,} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Product } from "../../routes/ProductsPage";
import { forwardRef, useContext } from "react";
import { SessionContext } from "../../context/SessionContext";
import { Button, ButtonProps, useButton } from "@mui/base";
import theme from "../../theme";

const StyledButton = styled(Button)`
	background-color: ${theme.palette.primary.main};
	border: 4px solid black;
	border-radius: 0px;
	box-shadow: 4px 4px 0px black;
	width: 100px;
	height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

	&:hover {
		cursor: pointer;
        box-shadow: 6px 6px 0px black;
        transform: translate(-2px, -2px);
        background-color: ${theme.palette.primary.dark};
	}

	&:active {
        box-shadow: 0px 0px 0px;
		transform: translate(4px, 4px);
	}
`;

const BasketButton = forwardRef(function CustomButton(
    props: ButtonProps,
    ref: React.ForwardedRef<any>,
  ) {
    console.log(props)
    const { children } = props;
    const { getRootProps } = useButton({
      ...props,
      rootRef: ref,
    });
  
    return (
      <StyledButton
        {...getRootProps()}
      >
        {children}
      </StyledButton>
    );
  });


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
				height: 400
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
					<Link component={RouterLink} to={`/products/${product.id}`}>
						<Typography variant="h5" gutterBottom marginBottom={"10px"} noWrap={true}>
							{product.name}
						</Typography>
					</Link>
					<div style={{
						marginTop: "30px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center"
					}}>
						<Typography variant="h5" color="inherit" sx={{ fontWeight: 800 }}>
							{`${product.price.toFixed(2)} EUR`}
						</Typography>
						<BasketButton
							onClick={() => session.addToBasket(product.id)}
						>
							<Typography variant="h5">Basket</Typography>
						</BasketButton>
					</div>
				</CardContent>
			</Card>
		</Grid >
	);
}
