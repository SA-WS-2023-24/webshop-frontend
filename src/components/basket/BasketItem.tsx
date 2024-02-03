import { Box, Link, Typography, styled } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import theme from "../../theme";
import { Button } from "@mui/base";
import { BasketItem as BasketItemProps } from "../../routes/BasketPage";
import { HTMLAttributes, forwardRef, useContext, useState } from "react";
import { SessionContext } from "../../context/SessionContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Link as RouterLink } from "react-router-dom";

const StyledButton = styled(Button)`
	background-color: ${(props) => props.customColor || theme.palette.primary.main};
	border: 4px solid black;
	border-radius: 0px;
	box-shadow: ${(props) => `${props.bs}px ${props.bs}px 0px black` || '4px 4px 0px black'};
	width: ${(props) => props.customWidth || '50px'};
	height: ${(props) => props.customHeight || '50px'};
    display: flex;
    justify-content: center;
    align-items: center;

	&:hover {
		cursor: pointer;
        box-shadow: ${(props) => `${props.bs - 1}px ${props.bs - 1}px 0px black` || '3px 3px 0px black'};
        transform: translate(1px, 1px);
        background-color: ${(props) => props.customColor || theme.palette.primary.dark};;
	}

	&:active {
        box-shadow: 0px 0px 0px;
		transform: ${(props) => `translate(${props.bs}px, ${props.bs}px)` || 'translate(4px, 4px)'};
	}
`;

interface CustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
    customWidth?: string;
    customHeight?: string;
    customColor?: string;
    bs?: number;
}

const DeleteButton = forwardRef<HTMLButtonElement, CustomButtonProps>(({ customWidth, customHeight, customColor, ...rest }, ref) => {
    return (
        <StyledButton
            ref={ref}
            customWidth={customWidth}
            customHeight={customHeight}
            customColor={customColor}
            {...rest}
        />
    );
});

export default function BasketItem({ productId, name, imgLink, description, price, quantity }: BasketItemProps) {
    const session = useContext(SessionContext);
    const [selectedQuantity, setSelectedQuantity] = useState<number>(quantity)

    function addOneToQuantity() {
        setSelectedQuantity(selectedQuantity + 1)
    }

    function subtractOneToQuantity() {
        if (selectedQuantity > 1) {
            setSelectedQuantity(selectedQuantity - 1)
        }
    }

    return (
        <Box sx={{
            height: 250,
            display: "flex",
            borderBottom: "8px solid black"
        }}>
            <div style={{
                margin: "30px 0px 30px 50px",
                width: "25%",
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
                        objectFit: "cover"
                    }}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    margin: "30px",
                    flexGrow: 1,
                    width: "50%",

                }}
            >
                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <Typography variant="h5" width={100}>NAME:</Typography>
                    <Typography variant="h5" noWrap>
                        <Link
                            component={RouterLink}
                            to={`/products/${productId}`}
                            underline="hover"
                            sx={{ color: 'black' }}
                        >
                            {name}
                        </Link>
                    </Typography>
                </div>

                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <div
                        style={{
                            display: "flex"
                        }}
                    >
                        <Typography variant="h5" width={100}>QTY:</Typography>
                        <Typography variant="h5" width={100}>{selectedQuantity}</Typography>
                    </div>

                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <DeleteButton
                            customColor={theme.palette.background.default}
                            customWidth="35px"
                            customHeight="35px"
                            bs={2}
                            onClick={() => addOneToQuantity()}
                        >
                            <AddIcon />
                        </DeleteButton>
                        <DeleteButton
                            customColor={theme.palette.background.default}
                            customWidth="35px"
                            customHeight="35px"
                            bs={2}
                            onClick={() => subtractOneToQuantity()}
                        >
                            <RemoveIcon />
                        </DeleteButton>
                    </div>
                </div>
                <div
                    style={{
                        width: "400px"
                    }}
                >
                    <Typography variant="h5">DESC:</Typography>
                    <Typography noWrap>{description}</Typography>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    width: "25%",
                    flexGrow: 1,
                    flexDirection: "column",
                    alignItems: "end",
                    justifyContent: "space-between",
                    margin: "30px 30px 30px 0px"
                }}
            >
                <DeleteButton
                    bs={4}
                    onClick={() => session.updateProductInBasket(productId, selectedQuantity)}
                >
                    <RefreshIcon />
                </DeleteButton>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ marginRight: "20px" }}
                    >{price.toFixed(2)} EUR</Typography>
                    <DeleteButton
                        bs={4}
                        onClick={() => session.removeFromBasket(productId)}
                    >
                        <DeleteIcon />
                    </DeleteButton>
                </div>
            </div>
        </Box >
    );
}