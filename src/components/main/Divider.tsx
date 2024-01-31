import { Divider } from "@mui/material";

export function VerticalBorderDivider() {
    return (
        <Divider orientation='vertical' flexItem sx={{ borderRight: 8, color: 'black' }} />
    );
}

export function HorizontalBorderDivider() {
    return (
        <Divider orientation='horizontal' flexItem sx={{ borderBottom: 8, color: 'black' }} />
    );
}