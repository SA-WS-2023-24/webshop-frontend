import { AppBar, Autocomplete, Badge, Box, Link, TextField, Toolbar, Typography, alpha, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "../../context/SessionContext";
import { VerticalBorderDivider as Devider } from "./Divider";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    border: 0,
    shadow: 0,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    }
}));

const contentBoxStyle = {
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pr: 2,
    pl: 2,
    '&:hover': {
        backgroundColor: 'primary.main',
    },
}

export default function NavigationBar() {
    const session = useContext(SessionContext)

    return (
        <AppBar
            position="absolute"
            color="inherit"
            elevation={0}
            sx={{
                position: 'relative',
                borderBottom: 8,
            }}>
            <Toolbar style={{ paddingRight: 0, paddingLeft: 0 }}>
                <Link
                    component={RouterLink}
                    to={`/`}
                    underline="none"
                    sx={{ color: 'inherit' }}
                >
                    <Box sx={{ ...contentBoxStyle, width: 280 }}>
                        <img
                            src="/mainboard.svg"
                            alt="Logo"
                            height="50px"
                            style={{
                                marginRight: "10px"
                            }}
                        >
                        </img>
                        <Typography variant="h4" color="inherit" noWrap>
                            PcPartsShop
                        </Typography>

                    </Box>
                </Link>

                <Devider />
                <Link
                    component={RouterLink}
                    to={`products`}
                    underline="none"
                    sx={{ color: 'inherit' }}
                >
                    <Box sx={contentBoxStyle} width={180}>
                        <Typography variant="h4" color="inherit" noWrap>
                            PRODUCTS
                        </Typography>
                    </Box>
                </Link>
                <Devider />
                <Link
                    component={RouterLink}
                    to={`/products`}
                    underline="none"
                    sx={{ color: 'inherit' }}
                >
                    <Box sx={contentBoxStyle}>
                        <Typography variant="h4" color="inherit" noWrap>
                            PREBUILTS
                        </Typography>
                    </Box>
                </Link>
                <Devider />
                <Link
                    component={RouterLink}
                    to={`/products`}
                    underline="none"
                    sx={{ color: 'inherit' }}
                >
                    <Box sx={contentBoxStyle}>
                        <Typography variant="h4" color="inherit" noWrap>
                            BUILD KITS
                        </Typography>
                    </Box>
                </Link>
                <Devider />
                <Search 
                    sx={{ flexGrow: 1 }}
                >
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <CustomAutocomplete
                        freeSolo
                        options={session.products.map((hit) => hit.name)}
                        onInputChange={(_, value) => session.searchProducts(value)}
                        renderInput={(params) => (
                            <TextField
                              {...params}
                              label={<Typography variant="h6">SEARCH...</Typography>}
                              InputProps={{
                                ...params.InputProps,
                                type: 'search',
                              }}
                            />
                          )}
                    />
                </Search>
                <Devider />
                <Link
                    component={RouterLink}
                    to={`products`}
                    sx={{ color: 'inherit' }}
                >
                    <Box sx={{ ...contentBoxStyle, width: 80 }}>
                        <BookmarkIcon />
                    </Box>
                </Link>

                <Devider />
                <Link
                    component={RouterLink}
                    to={`basket`}
                    sx={{ color: 'inherit' }}
                >
                    <Box sx={{ ...contentBoxStyle, width: 80 }}>
                        {(session.basket.items.length === 0) ? (
                            <ShoppingCartIcon />
                        ) : (
                            <Badge
                                badgeContent={session.basket.items.map((item) => 
                                    item.quantity).reduce((a, b) => a + b)}
                                
                                color="error"
                            >
                                <ShoppingCartIcon />
                            </Badge>
                        )}
                    </Box>
                </Link>
                <Devider />
                <Box sx={{ ...contentBoxStyle, minWidth: "80px" }}>
                    <PersonIcon />
                </Box>
            </Toolbar>
        </AppBar>
    )
}
