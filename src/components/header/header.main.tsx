"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button, Container, Grid } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { primaryColorBlue, primaryColorOrange } from "@/Util/primarycolor";
import DehazeIcon from "@mui/icons-material/Dehaze";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  color: "#000",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20vw",
    },
  },
}));

const styleButtonTop: React.CSSProperties = {
  maxWidth: 120,
  minHeight: 47,
  minWidth: 120,
  fontSize: 10,
  fontWeight: "bolder",
  textAlign: "left",
  border: "none",
  color: "#fff",
  "&:hover": {
    color: primaryColorOrange,
  },
};
export default function HeaderMain() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
    console.log(event.target);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        sx={{
          color: primaryColorBlue,
          "&:hover": {
            backgroundColor: primaryColorBlue, // Màu nền khi hover
            color: primaryColorOrange, // Màu chữ khi hover
          },
        }}
        onClick={handleMenuClose}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <PhoneIphoneIcon /> <span> 1900.63.64.69</span>
        </Box>
      </MenuItem>
      <MenuItem
        sx={{
          color: primaryColorBlue,
          "&:hover": {
            backgroundColor: primaryColorBlue, // Màu nền khi hover
            color: primaryColorOrange, // Màu chữ khi hover
          },
        }}
        onClick={handleMenuClose}
      >
        Testing
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ backgroudColor: primaryColorBlue }}
    >
      <MenuItem>
        <Button
          variant="contained"
          startIcon={<PlaceIcon />}
          sx={styleButtonTop}
        >
          Vị trí <br /> cửa hàng
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          variant="contained"
          startIcon={<CalendarMonthIcon />}
          sx={styleButtonTop}
        >
          Đặt lịch
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button
          aria-controls={menuId}
          onClick={handleProfileMenuOpen}
          variant="contained"
          startIcon={<PermContactCalendarIcon />}
          sx={styleButtonTop}
          endIcon={<ExpandMoreIcon />}
        >
          Liên hệ
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: primaryColorBlue }}>
        <Container>
          <Toolbar>
            <Grid container alignItems={"center"} spacing={2}>
              <Grid item xs={6} md={2} justifyContent="flex-start">
                {/* -----------------LOGO------------- */}
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <Link href={"/"}>
                    <img
                      alt="logo"
                      style={{
                        maxWidth: 200,
                        marginRight: 20,
                        height: "100%",
                        width: "100%",
                      }}
                      src="img/logoblc.png"
                    />
                  </Link>
                </Typography>
              </Grid>
               {/* -----------------button mobile responsive------------- */}
               <Box sx={{ display: { xs: "flex", md: "none" } }}>
               <Grid item xs={6} md={0} display={{ xs: "flex", md: "none" }} justifyContent="flex-end">
                
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
              </Grid>
              </Box>

              {/* -----------------CATEGORY------------- */}

              <Grid item>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Button
                    aria-controls={menuId}
                    onClick={handleProfileMenuOpen}
                    variant="contained"
                    startIcon={<DehazeIcon />}
                    sx={{
                      ...styleButtonTop,
                      fontWeight: "bold",
                    }}
                  >
                    Danh mục
                  </Button>
                </Box>
              </Grid>

              {/* -----------------SEARCH------------- */}
              <Grid item xs={12} md={4}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Nhập vào sản phẩm bạn muốn tìm"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Grid>
              <Box sx={{ flexGrow: 1 }} />
              <Grid item sm={5} md={4} >
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    gap: "15px",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<PlaceIcon />}
                    sx={styleButtonTop}
                  >
                    Vị trí <br /> cửa hàng
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<CalendarMonthIcon />}
                    sx={styleButtonTop}
                  >
                    Đặt lịch
                  </Button>
                  <Button
                    aria-controls={menuId}
                    onClick={handleProfileMenuOpen}
                    variant="contained"
                    startIcon={<PermContactCalendarIcon />}
                    sx={styleButtonTop}
                    endIcon={<ExpandMoreIcon />}
                  >
                    Liên hệ
                  </Button>
                  {/* <span>Vị trí cửa hàng</span>
            <span>Tra cứu đơn hàng</span> */}
                  {/*              
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
