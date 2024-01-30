import { Grid } from "@mui/material";
import PromotionCodeCard from "../components/home/PromotionCodeCard";

export default function HomePage() {
    return (
        <Grid container style={{ height: '100vh' }}>
            <Grid item xs={12} sx={{ borderBottom: 4 }}>
                <img 
                    src="https://preview.redd.it/dwjbj91ej4p91.jpg?auto=webp&s=64076566207767a3046b7e34fbf046ffa88a340f"
                    alt="RTX 5090"
                    style={{
                        width: "500px",
                        height: "600px",
                        objectFit: "scale-down"
                    }}
                    >

                    </img>
            </Grid>
            <Grid item xs={4} sx={{ borderTop: 4, borderRight: 4 }}>
                <PromotionCodeCard />
            </Grid>
            <Grid item xs={4} sx={{ border: 4, borderBottom: 0 }}>
                <PromotionCodeCard />
            </Grid>
            <Grid item xs={4} sx={{ borderTop: 4, borderLeft: 4 }}>
                <PromotionCodeCard />
            </Grid>
        </Grid>
    );
}