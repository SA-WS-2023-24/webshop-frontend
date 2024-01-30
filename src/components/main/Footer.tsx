import { Box, Link, Typography } from "@mui/material";

function Copyright() {
	return (
		<Typography variant="body2" color="primary.main">
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				PcPartsShop
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default function Footer() {
	return (
		<Box sx={{
			display: "flex",
			height: 80,
			borderTop: "8px solid black",
			bgcolor: "inherit",
			justifyContent: "center",
			alignItems: "center"
		}}>
			<Copyright />
		</Box>
	);
}