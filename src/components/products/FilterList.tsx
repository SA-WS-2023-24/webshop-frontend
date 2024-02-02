import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { useContext } from "react";
import { SessionContext } from "../../context/SessionContext";

export default function FilterList() {
    const session = useContext(SessionContext)
    const values: string[] = ["VIDEOCARD", "CPU", "CASE", "MOTHERBOARD", "RAM",
        "STORAGE", "COOLING", "PERIPHERAL", "POWER_SUPPLY"].sort()

    function handleChange(selection: string): void {
        if (selection === session.lastFilter) {
            session.getProducts()
        } else {
            session.getProductsFromCategory(selection)
        }
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {values.map((value, index) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={index}
                        disablePadding
                    >
                        <ListItemButton role={undefined} dense onClick={() => handleChange(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    key={value}
                                    edge="start"
                                    checked={session.lastFilter === value}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <Typography variant="h6">{value.replace(/_/g, ' ')}</Typography>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}