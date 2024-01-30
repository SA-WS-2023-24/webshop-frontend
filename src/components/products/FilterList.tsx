import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FilterList() {
    const navigate = useNavigate();
    const [checked, setChecked] = useState<string>("");
    const values: string[] = ["VIDEOCARD", "CPU", "CASE", "MOTHERBOARD", "RAM",
        "STORAGE", "COOLING", "PERIPHERAL", "POWER SUPPLY"]

    function handleChange(selection: string): void {
        if (selection === checked) {
            setChecked("")
            navigate("/products")
        } else {
            setChecked(selection)
            navigate(`/products/filter/${selection.toLowerCase()}`)
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
                                    checked={checked === value}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <Typography variant="h6">{value}</Typography>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}