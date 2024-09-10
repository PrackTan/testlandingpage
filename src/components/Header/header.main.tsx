import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "black", position: "fixed" }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Left Section: Logo */}
          <Grid item xs={6} sm={4} md={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Logo Image */}
              <img
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/05/LOGO-BLM-SINCE-2006-310524-1.png"
                alt="Bạch Long mobile"
                style={{width:100,height:60}}
              />

              {/* Text next to the logo */}
              {/* <Image
                src="/logo.png"
                alt="Bạch Long Mobile"
                width={60}
                height={40}
              /> */}
            </Box>
          </Grid>
          <Grid
            sx={{ display: { xs: "none", sm: "block" }, textAlign: "center" }}
            item
            xs={4}
          >
            <Typography variant="h6" sx={{ color: "white", fontSize: "14px" }}>
              Đại Lý Ủy Quyền Chính Thức Của Apple
            </Typography>
          </Grid>
          {/* Right Section: Phone number (in the same row as logo for mobile) */}
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            sx={{
              textAlign: "right",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <a
              href="tel:18003355"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton color="inherit">
                <PhoneIcon />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px", color: "white" }}
                  >
                    18003355
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Tổng đài miễn phí
                  </Typography>
                </Box>
              </IconButton>
            </a>
          </Grid>

          {/* Center Section: Official Reseller Text takes up full width on mobile */}
          <Grid
            sx={{ display: { xs: "block", sm: "none" }, textAlign: "center" }}
            item
            xs={12}
          >
            <Typography variant="h6" sx={{ color: "white", fontSize: "14px" }}>
              Đại Lý Ủy Quyền Chính Thức Của Apple
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
