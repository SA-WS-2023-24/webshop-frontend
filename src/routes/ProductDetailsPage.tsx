import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Product } from "./ProductsPage";
import { Box, Typography, styled } from "@mui/material";
import { SessionContext } from "../context/SessionContext";
import { forwardRef, useContext } from "react";
import { HorizontalBorderDivider } from "../components/main/Divider";
import ProductDetailTabs from "../components/product_details/ProductTabs";
import theme from "../theme";
import { Button as BaseButton, ButtonProps, useButton } from "@mui/base";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const response = await fetch(`http://192.168.49.2:30001/v1/product/${params.productId}`)
        .then((response) => {
            if (!response.ok) {
                console.error("error occured!");
            }
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



const DetailsButton = styled(BaseButton)`
	background-color: ${theme.palette.primary.main};
	border: 8px solid black;
	border-radius: 0px;
	box-shadow: 8px 8px 0px black;
	width: 200px;
	height: 80px;

	&:hover {
		cursor: pointer;
        box-shadow: 10px 10px 0px black;
        transform: translate(-2px, -2px);
        background-color: ${theme.palette.primary.dark};
	}

	&:active {
        box-shadow: 0px 0px 0px;
		transform: translate(8px, 8px);
	}
`;

const CustomButton = forwardRef(function CustomButton(
    props: ButtonProps,
    ref: React.ForwardedRef<any>,
  ) {
    const { children } = props;
    const { getRootProps } = useButton({
      ...props,
      rootRef: ref,
    });
  
    return (
      <DetailsButton
        {...getRootProps()}
      >
        {children}
      </DetailsButton>
    );
  });
  


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
                justifyContent: 'spread-around',
                alignItems: "center",
                marginTop: '70px',
                marginBottom: '70px',
                height: "500px",
                width: "1600px",
            }}>
                <img
                    src={product.imageLink}
                    style={{
                        border: '8px solid black',
                        backgroundColor: "white",
                        padding: '20px',
                        width: "600px",
                        height: "100%",
						objectFit: "scale-down"
                    }}
                />
                <div style={{
                    display: 'flex',
                    flexGrow: 1,
                    height: "100%",
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'left',
                    padding: "20px 0px 20px 20px",
                }}>
                    <Typography variant="h3">{product.name}</Typography>
                    <Typography variant="h3">{product.price.toFixed(2)} EUR</Typography>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: "100%",
                    padding: "40px 0px 40px 0px"
                }}>
                    <CustomButton><Typography variant="h4">FAVS</Typography></CustomButton>
                    <CustomButton><Typography variant="h4">CONFIGURE</Typography></CustomButton>
                    <CustomButton
                        onClick={() => session.addToBasket(product.id)}
                    >
                        <Typography variant="h4">BASKET</Typography>
                    </CustomButton>
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