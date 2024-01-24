import { Grid } from "@mui/material";
import PromotionCodeCard from "../components/home/PromotionCodeCard";

export default function HomePage() {
    return (
        <Grid container style={{ height: '100vh' }}>
            <Grid xs={12} sx={{ borderBottom: 4 }}>
                Here we can show or cool products
            </Grid>
            <Grid xs={4} sx={{ borderTop: 4, borderRight: 4 }}>
                <PromotionCodeCard />
            </Grid>
            <Grid xs={4} sx={{ border: 4, borderBottom: 0 }}>
                <PromotionCodeCard />
            </Grid>
            <Grid xs={4} sx={{ borderTop: 4, borderLeft: 4 }}>
                <PromotionCodeCard />
            </Grid>
        </Grid>
    );
}