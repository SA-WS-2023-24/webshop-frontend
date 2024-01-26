import { AppBar, Box, Divider, IconButton, InputBase, Link, Menu, MenuItem, Toolbar, Typography, alpha, styled } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    }
}));

function BlackDevider() {
    return (
        <Divider orientation='vertical' flexItem sx={{ borderRight: 8, color: 'black' }} />
    );
}

const contentBoxStyle = {
    height: 64,
    display: 'flex',
    alignItems: 'center',
    pr: 2,
    pl: 2,
    '&:hover': {
        backgroundColor: 'primary.main',
    },
}

export default function NavigationBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                <Box sx={contentBoxStyle}>

                    <Box sx={{ pr: 2 }}>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <HomeIcon />
                        </IconButton>
                    </Box>
                    <BlackDevider />
                    <Box sx={{ pl: 2 }}>
                        <Link
                            component={RouterLink}
                            to={`prodcts`}
                            underline="none"
                            sx={{ color: 'inherit' }}
                        >
                            <Typography variant="h4" color="inherit" noWrap>
                                PcPartsShop
                            </Typography>
                        </Link>
                    </Box>
                </Box>

                <BlackDevider />
                <Link
                    component={RouterLink}
                    to={`products`}
                    underline="none"
                    sx={{ color: 'inherit' }}
                >
                    <Box sx={contentBoxStyle}>
                        <Typography variant="h4" color="inherit" noWrap>
                            PRODUCTS
                        </Typography>
                    </Box>
                </Link>
                <BlackDevider />
                <Box sx={contentBoxStyle}>
                    <Typography variant="h4" color="inherit" noWrap>
                        PREBUILTS
                    </Typography>
                </Box>
                <BlackDevider />
                <Box sx={contentBoxStyle}>
                    <Typography variant="h4" color="inherit" noWrap>
                        BUILD KITS
                    </Typography>
                </Box>
                <BlackDevider />
                <Search sx={{ flexGrow: 1 }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="SEARCH..."
                        sx={{ fontSize: 24 }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <BlackDevider />
                <Box sx={contentBoxStyle}>
                    <IconButton
                        disableRipple
                        size="large"
                        color="inherit"
                    >
                        <Link
                            component={RouterLink}
                            to={`wishlist`}
                            sx={{ color: 'inherit' }}
                        >
                            <BookmarkIcon />
                        </Link>
                    </IconButton>
                </Box>

                <BlackDevider />
                <Box sx={contentBoxStyle}>
                    <IconButton
                        disableRipple={true}
                        size="large"
                        color="inherit"
                    >
                        <Link
                            component={RouterLink}
                            to={`basket`}
                            sx={{ color: 'inherit' }}
                        >
                            <ShoppingCartIcon />
                        </Link>
                    </IconButton>
                </Box>
                <BlackDevider />
                <Box sx={contentBoxStyle}>
                    <IconButton
                        disableRipple={true}
                        size="large"
                        color="inherit"
                        onClick={handleClick}
                    >
                        <PersonIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link
                            component={RouterLink}
                            to={`login`}
                            sx={{ color: 'inherit' }}
                        ><MenuItem>Login</MenuItem></Link>
                        <Link
                            component={RouterLink}
                            to={`signup`}
                            sx={{ color: 'inherit' }}
                        ><MenuItem>Sign Up</MenuItem></Link>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
