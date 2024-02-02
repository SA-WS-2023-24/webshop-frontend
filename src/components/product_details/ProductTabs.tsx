import {
	Tab as BaseTab, TabPanel as BaseTabPanel, Tabs, TabsList as BaseTabsList,
	buttonClasses, tabClasses
} from "@mui/base";
import { Box, Typography, styled } from "@mui/material";
import theme from "../../theme";

const Tab = styled(BaseTab)`
  cursor: pointer;
  font-weight: bold;
  background-color: inherit;
  line-height: 1.5;
  margin-right: -8px;
  padding: 8px 20px;
  border: 8px black solid;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${theme.palette.primary.main};
  }

  &.${tabClasses.selected} {
    background-color: ${theme.palette.primary.main};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  display: flex;
  flex-grow: 100%;
  border: 8px solid black;
`;

const TabsList = styled(BaseTabsList)(() => `
	min-width: 400px;
	background-color: inherit;
	margin-bottom: -8px;
	display: flex;
	`,
);

export default function ProductDetailTabs() {

	return (

		<Tabs
			defaultValue={1}
			style={{
				height: "100%",
			}}
		>
			<TabsList>
				<Tab value={1}>
					<Typography variant="h4">
						DESCRIBTION
					</Typography>
				</Tab>
				<Tab value={2}>
					<Typography variant="h4">
						FEATURES
					</Typography>
				</Tab>
				<Tab value={3}>
					<Typography variant="h4">
						REVIEWS
					</Typography>
				</Tab>
				<Tab value={4}>
					<Typography variant="h4">
						COMPARE
					</Typography>
				</Tab>
			</TabsList>
			<TabPanel value={1}>First page</TabPanel>
			<TabPanel value={2}>Second page</TabPanel>
			<TabPanel value={3}>Third page</TabPanel>
		</Tabs>

	);
}