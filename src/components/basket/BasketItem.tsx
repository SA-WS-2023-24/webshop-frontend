import { Box, Typography, styled } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import theme from "../../theme";
import { Button, ButtonProps, useButton } from "@mui/base";
import { BasketItem as BasketItemProps } from "../../routes/BasketPage";
import { forwardRef, useContext } from "react";
import { SessionContext } from "../../context/SessionContext";

const StyledButton = styled(Button)`
	background-color: ${theme.palette.primary.main};
	border: 4px solid black;
	border-radius: 0px;
	box-shadow: 4px 4px 0px black;
	width: 50px;
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

const DeleteButton = forwardRef(function CustomButton(
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

export default function BasketItem({ productId, name, imgLink, description, price, quantity }: BasketItemProps) {
    const session = useContext(SessionContext);

    return (
        <Box sx={{
            height: 250,
            display: "flex",
            flexDirection: "row",
            borderBottom: "8px solid black"
        }}>
            <div style={{
                margin: "30px 0px 30px 50px",
                width: "200px",
                backgroundColor: "white",
                border: "4px solid black",
                boxShadow: "8px 8px 0px #FFBC6C"
            }}>
                <img
                    src={imgLink}
                    alt={name}
                    style={{
                        padding: "10px",
                        width: "100%",
                        height: "100%",
                        objectFit: "scale-down"
                    }}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    margin: "30px",
                    flexGrow: 1
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Typography variant="h5">NAME:</Typography>
                    <Typography variant="h5">QTY:</Typography>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "20px"
                    }}
                >
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="h5">{quantity}</Typography>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto 30px 30px 0px"
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ marginRight: "20px" }}
                >{price.toFixed(2)} EUR</Typography>
                <DeleteButton
                    onClick={() => session.removeFromBasket(productId)}
                >
                    <DeleteIcon />
                </DeleteButton>
            </div>

        </Box>
    );
}